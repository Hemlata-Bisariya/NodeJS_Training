// const doWork = () =>{

// }
// console.log(doWork()); //undefined


// const doWork = async() =>{

// }
// console.log(doWork()); // Promise { undefined }


// const doWork = async () => {
//   return "Hemlata";
// };
//console.log(doWork()); //Promise { 'Helata' }



const doWork = async () => {
    return "Hemlata";
  };

doWork()
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
//Hemlata