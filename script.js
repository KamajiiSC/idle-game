let trainPoints = 0;
let gloveLvl = 1;

document.getElementById("train-display").innerHTML= "Training Points: " + trainPoints;
document.getElementById("glove-display").innerHTML= "Glove Level: " + gloveLvl;

document.getElementById("train-btn").addEventListener("click", train);
document.getElementById("glove-btn").addEventListener("click", glove);

function train(){
  for (i= 0; i < gloveLvl; i++){
    trainPoints++;
  }
  document.getElementById("train-display").innerHTML= "Training Points: " + trainPoints;
  //alert (trainPoints);
};

function glove(){
  if(trainPoints >= 5){
    trainPoints -= 5;
    document.getElementById("train-display").innerHTML= "Training Points: " + trainPoints;
    gloveLvl++;
    document.getElementById("glove-display").innerHTML= "Glove Level: " + gloveLvl;
  }
};



