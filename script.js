let trainPoints = 0;
let gloveLvl = 0;

document.getElementById("train-display").innerHTML= "Training Points: " + trainPoints;
document.getElementById("glove-display").innerHTML= "Glove Level: " + gloveLvl;

document.getElementById("train-btn").addEventListener("click", train);
document.getElementById("glove-btn").addEventListener("click", glove);

function train(){
  trainPoints++;
  document.getElementById("train-display").innerHTML= "Training Points: " + trainPoints;
  //alert (trainPoints);
};

function glove(){

};



