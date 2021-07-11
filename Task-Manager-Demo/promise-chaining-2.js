require("../src/db/mongoose");
const { count } = require("../src/models/task");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("60cf203676c83a28986397e5")
//   .then((user) => {
//     console.log(user);
//     return Task.countDocuments({completed : false});
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

  const deleteTaskAndCount = async(id)=>{
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed : false})
    return count;
  }

  deleteTaskAndCount("60cde79d44ec4f13f8fd83e5").then((count) =>{
    console.log(count);
  }).catch((e) =>{
    console.log(e)
  })

