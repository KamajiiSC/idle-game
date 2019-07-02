let trainPoints = 0;

document.getElementById("train-display").innerHTML= "Training Points: " + trainPoints;

document.getElementById("train-btn").addEventListener("click", train);

function train(){
  trainPoints++;
  document.getElementById("train-display").innerHTML= "Training Points: " + trainPoints;
  //alert (trainPoints);
};



