const express = require("express");
const multer = require("multer");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);

  // try {
  //   const user = await User.find({});
  //   res.status(201).send(user);
  // } catch (e) {
  //   res.status(500).send(e);
  // }
});

router.patch("/users/me", async (req, res) => {
  const updates = Object.keys(req.body);
  const alloweUpdates = ["name", "email", "password", "age"];
  const isValidOpration = updates.every((update) =>
    alloweUpdates.includes(update)
  );

  if (!isValidOpration) {
    return res.status(404).send({ error: " Invalid updateds !" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    res.send(req.user);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.delete("/users/me", auth, async (req, res) => {
  try {
    // const user = await User.findByIdAndDelete(req.user._id);
    // if (!user) {
    //   return res.status(404).send();
    // }
    await req.user.remove();
    res.status(201).send(req.user);
  } catch (e) {
    res.status(500).send(e);
  }
});

const upload = multer({
  dest : "avatars",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    // if (!file.originalname.endsWith(".pdf")) {
    //   return cb(new Error("PLease upload a PDF"));
    // }
    
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("PLease upload an image"));
    }
    cb(undefined, true);
  }
})

router.post("/users/me/avatar", auth , upload.single('avatar'), async( req, res ) =>{
  req.user.avatar = req.file.buffer
  await req.user.save();
  res.send();
},(error, req , res, next) =>{
  res.status(400).send({error : error.message})
})

module.exports = router;
