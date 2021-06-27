const express = require("express");
require("./src/db/mongoose");
const userRouter = require("./src/routers/user")
const taskRouter = require("./src/routers/task")

const app = express();
const port = process.env.PORT || 4000;

app.use((req,res,next) =>{
  console.log(res.method,res.path);
  next();
})

app.use(express.json())
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
  console.log("Server is  up on port : " + port);
});
