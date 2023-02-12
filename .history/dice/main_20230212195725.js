let dices = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png']
function roll(){
    let diceOneValue = Math.floor(Math.random()*6);
    let diceTwoValue = Math.floor(Math.random()*6);
    document.querySelector('.img1').setAttribute("src", `./images/${dices[diceOneValue]}`);
    document.querySelector('.img2').setAttribute("src", `./images/${dices[diceTwoValue]}`);
    let result = document.querySelector('.result');
    if(diceOneValue>diceTwoValue){
        result.innerHTML = "Player 1 win"
    } else if(diceOneValue<diceTwoValue){
        result.innerHTML = "Player 2 win"
    } else {
        result.innerHTML = "Draw"
    }
}