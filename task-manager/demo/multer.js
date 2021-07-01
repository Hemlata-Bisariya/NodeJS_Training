const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    // if (!file.originalname.endsWith(".pdf")) {
    //   return cb(new Error("PLease upload a PDF"));
    // }

    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("PLease upload a Word Document"));
    }
    cb(undefined, true);
  },
});

app.post("/upload", upload.single("upload"), (req, res) => {
  res.send();
},(error, req , res, next) =>{
    res.status(400).send({error : error.message})
});

// const errorMiddleware = (req, res, next) =>{
//     throw new Error( "From my middleware.. ")
// }

// app.post("/upload",errorMiddleware, (req, res) => {
//     res.send();
//   },(error, req , res, next) =>{
//       res.status(400).send({error : error.message})
//   });

app.listen(5000, () => {
  console.log("Server is  up on port : 5000 ");
});
