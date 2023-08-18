
function handleClick() {
// this.style.color = 'white';

 playSound(this.innerHTML);

 buttonAnimation(this.innerHTML);
 
 }


 
var drums=document.querySelectorAll('.drum');

for(var i=0;i<7;i++){
    drums[i].addEventListener('click', handleClick);

}

document.addEventListener('keydown', function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
   
   }
);

function playSound(key) {
    var tt;
    switch (key) {
        case 'w': tt='crash';
        break;
        case 'a': tt='kick-bass';
        break;
        case 's': tt='snare';
        break;
        case 'd': tt='tom-1';
        break;
        case 'j': tt='tom-2';
        break;
        case 'k': tt='tom-3';
        break;  
        case 'l': tt='tom-4';
        break;
        default: console.log(key);
     }
    
    
      var audio = new Audio('./sounds/'+tt+'.mp3');
      audio.play();
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.'+currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100);
}