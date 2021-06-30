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
