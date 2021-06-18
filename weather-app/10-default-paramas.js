const greeter = (name)=>{
    console.log("Hello " + name);
}
greeter("hemlata"); // Hello hemlata
greeter(); // Hello undefined

const greeter = (name = "User",age) =>{
    console.log("Hello "+ name,"Age "+age);
}
greeter("Hemlata" , 25); //Hello Hemlata Age 25
greeter(); //Hello User Age undefined