function dice(){
    //Select 2 image  
    let firstResult = document.querySelector('img.img1');
    let secondResult = document.querySelector('img.img2');

    //Create 2 seperate Math.random function to get the result from 1 to 6
    let x = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let y = Math.floor(Math.random() * (6 - 1 + 1) + 1);


    /*Function: displayTheDice with 2 parameters:
    random: add in the Math.random value above 
    result: To get the the img 'src' attribute 
    => Return: New image has number of dot in IN ACCORDANCE WITH Math.random value
    Ex: Math.random VALUE = 1 => return img: dice number 1
        Math.random VALUE = 2 => return img: dice number 2
        ... */
    function displayTheDice(random, result){
        switch(random){
            case 1: 
                result.src = 'images/dice1.png';
                break;
            case 2: 
                result.src = 'images/dice2.png';
                break;
            case 3: 
                result.src = 'images/dice3.png';
                break;
            case 4: 
                result.src = 'images/dice4.png';
                break;
            case 5: 
                result.src = 'images/dice5.png';
                break;
            case 6: 
                result.src = 'images/dice6.png';
                break;
        }
    }
    displayTheDice(x, firstResult);
    displayTheDice(y, secondResult);


    // If-else statement to print the result Who is the winner by comparing 2 value of Math.random
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


