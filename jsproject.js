var fname=prompt("Enter your First Name")
var lname=prompt("Enter your Last Name")
var age=prompt("Enter your age")
var h=prompt("Enter your height in cms")
var pet=prompt("Enter your pet name")
alert("Thank you for entering your details!")

var namecond = null
var agecond = null
var heightcond = null
var petcond = null

if(fname[0] === lname[0]){
    namecond = true;
}else{
    namecond = false;
}

if(age>20 && age<30){
    agecond = true;
}else{
    agecond = false;
}

if(h>=170){
    heightcond = true;
}else{
    heightcond = false;
}

if(pet[pet.length-1] === "y"){
    petcond = true;
}else{
    petcond = false;
}

if(namecond && agecond && heightcond && petcond){
    console.log("Welcome Spy!");
}else{
    console.log("Nothing is here for you!");
}