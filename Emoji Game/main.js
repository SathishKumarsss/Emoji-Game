var checkImage = [
    "emo-1.png", 
    "emo-2.png", 
    "emo-3.png", 
    "emo-4.png", 
    "emo-5.png", 
    "emo-6.png", 
    "emo-7.png", 
    "emo-8.png", 
    "emo-9.png", 
    "emo-10.png",
    "emo-11.png",
    "emo-12.png"
];
var clickedImages = [];


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function shuffleAndLoadImg() {
    let ranNumArr = [];
    for (let i = 0; i < 12; i++) {
        let ranNum = randomNumber(0, 12);
        if (!ranNumArr.includes(ranNum)) {
            ranNumArr.push(ranNum);
        } else {
            i--;
            continue;
        }
        document.getElementById("emoji-" + (i + 1)).src = checkImage[ranNum];
    }
}
var score = 0;
function play(box) {
    var imgElement = document.getElementById(box).src;
    if (clickedImages.includes(imgElement)) {
        openModal("You have already clicked this image");
        clickedImges =[];
        reset();
    } else {
        clickedImages.push(imgElement);
        score++;
        document.getElementById("score").innerText = score;
        shuffleAndLoadImg();
    }

    if (score == 12) {
        openModal("Congratulations, you won the game!");
        clickedImges =[];
        reset();
    }
}

function reset() {
    for (let i = 1; i <= 12; i++) {
        document.getElementById("emoji-" + i).src = "emo-" + i + ".png";
    }
    score = 0;
    document.getElementById("score").innerText = score;
    clickedImages = [];
}

function openModal(message) {
    document.getElementById("modalMsg").innerText = message;
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
