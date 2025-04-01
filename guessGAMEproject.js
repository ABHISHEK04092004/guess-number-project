let max=prompt("Please enter the max limit");
let random=Math.floor(Math.random()*max)+1;

let guess=prompt("Please guess the number");

while(true){
  if(guess=="quit"){
    alert("User quit");
    break;
  }


  if(guess==random){
    alert("congrats!Your guess is absolutely right",random);
    break;
  }
  else if(guess<random){
    guess=prompt("Hint:your guess is  small to the random number.Please try again");

  }

  else{
    guess=prompt("Hint:your guess is large")
  }
}