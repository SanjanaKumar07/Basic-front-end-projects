var age=prompt("What is your age?");
if(age<18){
    alert("You cannot enter!");
}
else if(age>=18 && age<21){
    alert("You can enter but cannot drink");
}
if(age>21){
    alert("You can enter and drink");
}
// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}