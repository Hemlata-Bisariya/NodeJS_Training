// Exporting a module :

console.log("exportFile");

const add =  function(a,b)
             {
                 return a+b;
             }
module.exports = add ;
/*
Module exports are the instruction that tells NodeJS which bits of code(functions, objects, strings, etc.)
to “export” from a given file so other files are allowed to access the exported code
*/
