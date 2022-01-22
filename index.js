// Detecting Button Presses
for(var i=0;i<document.querySelectorAll(".drum").length ;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

//Detecting Keyboard Strokes

document.addEventListener("keydown" , function (event)
{
  soundToBePlayed(event.key);
  buttonSelected(event.key);
});


function handleClick()
{
    var buttonClicked = this.innerHTML;

    soundToBePlayed(buttonClicked);
    buttonSelected(buttonClicked);
}

function soundToBePlayed(triggeredAction)
{
  switch (triggeredAction) {
    case 'w':
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
    case 'a' :
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
    case 's' :
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
    case 'd' :
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
    case 'j' :
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
    case 'k' :
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
    case 'l' :
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
    default:

  }
}

function buttonSelected(currentKey)
{
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function ()
  {
      activeButton.classList.remove("pressed");
  },100);
}
