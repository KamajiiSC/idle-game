let trainPoints = 0;
let gloveLvl = 1;
let dummyLvl = 0;

// Event Listeners for the buttons
document.getElementById("train-btn").addEventListener("click", train);
document.getElementById("glove-btn").addEventListener("click", glove);
document.getElementById("dummy-btn").addEventListener("click", dummy);


// Training function 
function train(){
  // Increments trainPoints by the gloveLvl each time "Train!" is pressed
  for (i= 0; i < gloveLvl; i++){
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
    // Updates Training Dummy Level
    document.getElementById("dummy-display").innerHTML= "Training Dummy Level: " + dummyLvl;
  }
}