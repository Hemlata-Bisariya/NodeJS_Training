const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "123455" }, "thisismylaptop", {expiresIn : "7 days"} );
  console.log(token);

  const data = jwt.verify(token, "thisismylaptop");
  console.log(data);
};

myFunction();
