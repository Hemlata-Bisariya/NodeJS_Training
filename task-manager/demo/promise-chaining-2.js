require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("60cf203676c83a28986397e5")
  .then((user) => {
    console.log(user);
    return Task.countDocuments({completed : false});
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
