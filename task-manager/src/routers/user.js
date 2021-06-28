const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth")
const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken()
    res.status(201).send({user, token});
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/login" , async(req,res) =>{
  try {
    const user = await User.findByCredentials(req.body.email , req.body.password);
    const token = await user.generateAuthToken()
    res.send({user : user.getPublicProfile(),token})
  } catch (e) {
    res.status(400).send(e);
  }
})

router.post("/users/logout", auth, async(req,res) =>{
  try {
    req.user.tokens  = req.user.tokens.filter((token) =>{
      return token.token !== req.token;
    })
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
})

router.post("/users/logoutAll" , auth , async(req , res)=>{
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send()
  } catch (e) {
    res.status(500).send(e);
  }
})


router.get("/users/me",auth, async (req, res) => {
   res.send(req.user);

  // try {
  //   const user = await User.find({});
  //   res.status(201).send(user);
  // } catch (e) {
  //   res.status(500).send(e);
  // }
});


router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});


router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const alloweUpdates = ["name", "email", "password", "age"];
  const isValidOpration = updates.every((update) =>
    alloweUpdates.includes(update)
  );

  if (!isValidOpration) {
    return res.status(404).send({ error: " Invalid updateds" });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id);
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(404).send(e);
  }
});


router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }

    res.status(201).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
