const express = require("express");
require("./src/db/mongoose");
const userRouter = require("./src/routers/user");
const taskRouter = require("./src/routers/task");

const app = express();
const port = process.env.PORT || 4000;

// app.use((req, res, next) => {

//   if(req.method === "GET") {
//     res.send("Get request is disabled");
//   } else {
//     next();
//   }
// });

// app.use((req,res,next) =>{

//   res.status(503).send("Site is currently down , Check back soon !")
// })
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is  up on port : " + port);
});
