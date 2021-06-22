const doWorkWithCallback = (callback) => {
  setTimeout(() => {
    // callback("Error", undefined);
    callback(undefined, [1, 2, 3]);
  }, 2000);
};

doWorkWithCallback((error, result) => {
  if (error) {
    return console.log("Error");
  }
  console.log(result);
});
