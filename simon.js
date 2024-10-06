let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIndx = Math.floor(Math.random() * btns.length); // Corrected here
    let rancolor = btns[ranIndx];
    let randbtn = document.querySelector(`.${rancolor}`);
    gameSeq.push(rancolor);
    gameFlash(randbtn);
}

function checkAns(idx) {
    console.log(`current level is : ${level}`);

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
        console.log("same value");

    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start the game again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress() {
    let btn = this;
    userFlash(btn); // Corrected here

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1); // Corrected here
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false; // Corrected here
    gameSeq = [];
    userSeq = [];
    level = 0;
}
