// document.querySelector("button").addEventListener("click" , handleClick);

// function handleClick(){
//     alert("I got clicked");
    
// }



//Detecting button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i =0;i<numberOfDrumButtons;i++){
 

  //in the document we try to grab all of the elements that a class drum have. SO we gets us all of those button of the class that  have    
    document.querySelectorAll(".drum")[i].addEventListener("click" , function handleClick(){

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        
        buttonAnimation(buttonInnerHTML);
        
    });
    
}


//detecting keyboard press

document.addEventListener("keydown",function(event){
    
    // alert("Key was pressed");
    makeSound(event.key);
    
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "a":
            var alphaA = new Audio("sound/A.mp3");
            alphaA.play();
            
            break;
        case "b":
            var alphaB = new Audio("sound/B.mp3");
            alphaB.play();
        break;
        case "c":
            var alphaC = new Audio("sound/C.mp3");
            alphaC.play();
        break;
        case "d":
            var alphaD = new Audio("sound/D.mp3");
            alphaD.play();
        break;
        case "e":
            var alphaE = new Audio("sound/E.mp3");
            alphaE.play();
        break;
        case "f":
            var alphaF = new Audio("sound/F.mp3");
            alphaF.play();
        break;
        case "g":
            var alphaG = new Audio("sound/G.mp3");
            alphaG.play();
        break;
        case "h":
            var alphaH = new Audio("sound/H.mp3");
            alphaH.play();
        break;
        case "i":
            var alphaI = new Audio("sound/I.mp3");
            alphaI.play();
        break;
        case "j":
            var alphaJ = new Audio("sound/J.mp3");
            alphaJ.play();
        break;
        case "k":
            var alphaK = new Audio("sound/K.mp3");
            alphaK.play();
        break;
        case "l":
            var alphaL = new Audio("sound/L.mp3");
            alphaL.play();
        break;
        case "m":
            var alphaM = new Audio("sound/M.mp3");
            alphaM.play();
        break;
        case "n":
            var alphaN = new Audio("sound/N.mp3");
            alphaN.play();
        break;
        case "o":
            var alphaO = new Audio("sound/O.mp3");
            alphaO.play();
        break;
        case "p":
            var alphaP = new Audio("sound/P.mp3");
            alphaP.play();
        break;

        case "q":
            var alphaQ = new Audio("sound/Q.mp3");
            alphaQ.play();
        break;
        case "r":
            var alphaR = new Audio("sound/R.mp3");
            alphaR.play();
        break;
        case "s":
            var alphaQ = new Audio("sound/S.mp3");
            alphaQ.play();
        break;
        case "t":
            var alphaT = new Audio("sound/T.mp3");
            alphaT.play();
        break;

        case "u":
            var alphaU = new Audio("sound/U.mp3");
            alphaAU.play();
        break;

        case "v":
            var alphaV = new Audio("sound/V.mp3");
            snare.play();
        break;

        case "w":
            var alphaAW = new Audio("sound/W.mp3");
            crash.play();
        break;

        case "x":
            var alphaX= new Audio("sound/X.mp3");
            alphaX.play();
        break;
        case "y":
            var alphaY= new Audio("sound/Y.mp3");
            alphaY.play();
        break;
        case "z":
            var alphaZ= new Audio("sound/Z.mp3");
            alphaZ.play();
        break;

        
     
        default:
            console.log(buttonInnerHTML);
     }
     
}

function buttonAnimation(currentKey){
  var activeButton =  document.querySelector("." + currentKey);
 
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}

// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();



