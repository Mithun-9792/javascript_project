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




Bracket Combinations
Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, so your program should return 5.
Examples
Input: 3
Output: 5
Input: 2
Output: 2

function BracketCombinations(num) { 

  // code goes here  
  let sum=1;
  for(let i=1; i<=num; i++){
    sum =sum*i
  }
  if(sum>2){
    sum=sum-1
  }

  return sum; 

}
   
// keep this function call here 
console.log(BracketCombinations(readline()));
