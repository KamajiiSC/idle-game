let trainPoints = 0;
let gloveLvl = 1;
let multipliers = 1;
let trainAmt = gloveLvl * multipliers;
let dummyLvl = 0;
let autoMultiplier = 0;
let autoClicker;

// Event Listeners for the buttons
document.getElementById("train-btn").addEventListener("click", function(){train(trainAmt)});
document.getElementById("glove-btn").addEventListener("click", glove);
document.getElementById("dummy-btn").addEventListener("click", dummy);
document.getElementById("sword-btn").addEventListener("click", sword);

// Training function 
function train(multiplier){
  // Increments trainPoints by the multiplier each time train() is called
  for (i= 0; i < multiplier; i++){
    trainPoints++;
  }

  // Updates the training points display
  document.getElementById("train-display").innerHTML= "Training Points: " + trainPoints;
};

// Function to increment gloveLvl, if you have atleast 5 trainPoints it removes 5 and increments gloveLvl
function glove(){
  if(trainPoints >= 5){
    trainPoints -= 5;
    // Updates Training Points display 
    document.getElementById("train-display").innerHTML= "Training Points: " + trainPoints;
    gloveLvl++;
    trainAmt = gloveLvl * multipliers;
    // Updates Glove Level display
    document.getElementById("glove-display").innerHTML= "Glove Level: " + gloveLvl;
  }
};

// Function to increment dummyLvl similar to glove() 
function dummy(){
  if(trainPoints >= 20){
    trainPoints -= 20;
    // Updates Training Points display
    document.getElementById("train-display").innerHTML= "Training Points: " + trainPoints;
    dummyLvl++;
    // Increments autoMultiplier with dummyLvl
    autoMultiplier++;
    // Updates Training Dummy Level
    document.getElementById("dummy-display").innerHTML= "Training Dummy Level: " + dummyLvl;
  }

  // Clear autoClicker's current interval and assign a new one
  clearInterval(autoClicker);
  autoClicker = setInterval(function(){train(autoMultiplier)}, 1000);
};

function sword(){
  if(trainPoints > 199){
    trainPoints -= 200;
    multipliers += 4;
    trainAmt = gloveLvl * multipliers;
     // Updates the training points display
  document.getElementById("train-display").innerHTML= "Training Points: " + trainPoints;
  }
}