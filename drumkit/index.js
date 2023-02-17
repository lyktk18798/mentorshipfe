
let button = document.querySelectorAll('button');
let sound = document.querySelectorAll('audio');

// WHEN CLICK TO EACH BUTTON
for (let i = 0; i < button.length; i++){
    button[i].onclick = function() {
        sound[i].currentTime = 0;
        sound[i].play();
    }
}

//WHEN PRESS BUTTON 
window.addEventListener('keydown', function(press){
        switch(press.keyCode){
            case 87:
                sound[0].currentTime = 0;
                sound[0].play();
                break;
            case 65:
                sound[1].currentTime = 0;
                sound[1].play();
                break;
            case 83:
                sound[2].currentTime = 0;
                sound[2].play();
                break;
            case 68:
                sound[3].currentTime = 0;
                sound[3].play();
                break;
            case 74:
                sound[4].currentTime = 0;
                sound[4].play();
                break;
            case 75:
                sound[5].currentTime = 0;
                sound[5].play();
                break;
            case 76:
                sound[6].currentTime = 0;
                sound[6].play();
                break;                  
        }
    })
