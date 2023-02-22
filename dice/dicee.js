function roll(){
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src","./images/dice" + random1 + ".png");
    document.querySelector(".img2").setAttribute("src","./images/dice" + random2 + ".png");
    if (random1 === random2) {
        document.querySelector(".result").innerHTML = "Draw!";
    }

    else if (random1 < random2) {
        document.querySelector(".result").innerHTML = ("Player2 WINS!");
    }

    else {
        document.querySelector(".result").innerHTML = ("Player1 WINS!");
    }

}