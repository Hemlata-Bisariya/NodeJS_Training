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

const Task = require("./src/models/task");
const User = require("./src/models/user");

const main = async () => {
  // const task = await Task.findById("60db7a549f7d363454ac5602");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);

  const user = await User.findById("60dc2df487c9b718d08e76cd");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main();
