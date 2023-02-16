let firstResult = document.querySelector('img.img1');
let secondResult = document.querySelector('img.img2');
 
function dice(){
    let x = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let y = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    switch(x){
        case 1: 
            firstResult.src = '/images/dice1.png';
        break;
        case 2: 
            firstResult.src = '/images/dice2.png';
        break;

        case 3: 
            firstResult.src = '/images/dice3.png';
        break;
        case 4: 
            firstResult.src = '/images/dice4.png';
        break;

        case 5: 
            firstResult.src = '/images/dice5.png';
        break;
        
        case 6: 
            firstResult.src = '/images/dice6.png';
        break;
        }
    
    switch(y){
        case 1: 
            secondResult.src = '/images/dice1.png';
            break;
        case 2: 
            secondResult.src = '/images/dice2.png';
            break;
    
        case 3: 
            secondResult.src = '/images/dice3.png';
            break;
    
        case 4: 
            secondResult.src = '/images/dice4.png';
            break;
    
        case 5: 
            secondResult.src = '/images/dice5.png';
            break;
            
        case 6: 
            secondResult.src = '/images/dice6.png';
            break;
    }
        let winner = document.querySelector('h1');
        if(x>y){
            winner.textContent = "Player 1 Win!";
        } else if (x < y){
            winner.textContent = "Player 2 Win!";
        } else {
            winner.textContent = "Draw!";
        }


}
document.querySelector('button').onclick = function() {dice()};


