const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

add(2, 4, (sum) => {
  console.log(sum); //print 6
});


//GeoCode Demo :
const geoCode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};

 geoCode("Hoshangabad", (data) => {
    console.log(data);
 });

 /*
A callback function is a function that’s passed as an argument to another function.
Node.js, being an asynchronous platform, doesn't wait around for things like file I/O to finish,
Node.js uses callbacks.
A callback is a function called at the completion of a given task; this prevents any blocking,
and allows other code to be run in the meantime.
 */

