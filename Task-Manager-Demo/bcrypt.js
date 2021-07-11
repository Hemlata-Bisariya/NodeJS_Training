const bcrypt =  require("bcryptjs");

const myFunction = async() =>{
    const password = "abcd123!";
    const hashedPassword = await bcrypt.hash(password,8);
    
    console.log(password); //abcd123!
    console.log(hashedPassword); //$2a$08$N.Ka8VQK9SKD1QbSIfuZNuriiweEdKeix19GHYWxA06HKdrkSJQg6

    const isMatch = await bcrypt.compare("abc123!",hashedPassword)
    console.log(isMatch)

}

myFunction();