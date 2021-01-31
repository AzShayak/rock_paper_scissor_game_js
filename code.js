let playerPic = document.querySelector("#playerPic");
let botPic = document.querySelector("#botPic");
let playerText = document.querySelector("#playerInfo")
let botText = document.querySelector("#botInfo")
let resultText = document.querySelector("#winInfo");
let playerScore = 0;
let botScore = 0;

function givePaper() { game(0) };
function giveScissor() { game(1) };
function giveRock() { game(2) };

function game(playerInput) {
    const botInput = Math.floor(Math.random() * 3);
    let result;

    if (playerInput == botInput) {
        result = "Draw";
    } else if (playerInput == 0 && botInput == 2) {
        result = "You win!";
        playerScore++;
    } else if (playerInput == 1 && botInput == 0) {
        result = "You win!";
        playerScore++;
    } else if (playerInput == 2 && botInput == 1) {
        result = "You win!";
        playerScore++;
    } else {
        result = "You lose";
        botScore++;
    }

    show(playerInput, botInput, result)
}

function show(player, bot, info) {

    switch (player) {
        case 0:
            playerPic.src = "paper.jpg";
            playerText.innerText = `You : ${playerScore}\nPaper`;
            break;
        case 1:
            playerPic.src = "scissor.jpg";
            playerText.innerText = `You : ${playerScore}\nScissor`;
            break;
        case 2:
            playerPic.src = "rock.jpg";
            playerText.innerText = `You : ${playerScore}\nRock`;
            break;
        default:
            playerPic.src = "player.png";
            break;
    }

    switch (bot) {
        case 0:
            botPic.src = "paper.jpg";
            botText.innerText = `Bot : ${botScore}\nPaper`;
            break;
        case 1:
            botPic.src = "scissor.jpg";
            botText.innerText = `Bot : ${botScore}\nScissor`;
            break;
        case 2:
            botPic.src = "rock.jpg";
            botText.innerText = `Bot : ${botScore}\nRock`;
            break;
        default:
            botPic.src = "bot.png";
            break;
    }

    playerPic.style.transform = "rotate(90deg) rotateY(180deg)"
    botPic.style.transform = "rotate(270deg)"
    resultText.innerText = info;
}