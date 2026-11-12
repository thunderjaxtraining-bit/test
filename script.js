"use strict";

const tontonGifs = [
  "https://media.tenor.com/TUVAE2M_wz4AAAAi/chubby-tonton.gif",
  "https://media.tenor.com/pZk_U5JVWzUAAAAi/tonton-friends-tonton.gif",
  "https://media.tenor.com/Jkha__Yjf0oAAAAi/sad-depression.gif",
  "https://media.tenor.com/U0OPHZokzkUAAAAi/what-seriously.gif",
  "https://media.tenor.com/WKXMmSk3JJsAAAAi/chubby-tonton.gif",
  "https://media.tenor.com/ZHWV13jliTAAAAAi/chubby-tonton.gif",
  "https://media.tenor.com/Jkha__Yjf0oAAAAi/sad-depression.gif",
  "https://media.tenor.com/U0OPHZokzkUAAAAi/what-seriously.gif",
  "https://media.tenor.com/ZHWV13jliTAAAAAi/chubby-tonton.gif",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 8;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let yesButtonSize = 1;

yesBtn.addEventListener("click", () => {
    title.innerHTML = `
    Hey, I know mali yung mga naging actions ko
    kaya I'm really sorry talaga.
    Please I hope you forgive me.
    Babawi talaga ako sayo.
    LOVE UUU 💗
`;

title.style.whiteSpace = "normal";
title.style.maxWidth = "600px";
title.style.lineHeight = "1.5";

    // Make the title smaller
    title.style.fontSize = "2.5rem";

    // Make Tonton smaller
    img.style.height = "20rem";

    btnContainer.classList.add("hidden");
    changeImage("yes");
});

noBtn.addEventListener("click", () => {
    if (play) {
        noCount++;

        const imageIndex = (noCount - 1) % tontonGifs.length;

        changeImage(imageIndex);
        resizeYesButton();
        shrinkNoButton();
        updateNoButtonText();
    }
});

function resizeYesButton() {
  yesButtonSize *= 1.2;
  yesBtn.style.transform = `scale(${yesButtonSize})`;
}

function shrinkNoButton() {
  noButtonSize *= 0.90;
  noBtn.style.transform = `scale(${noButtonSize})`;
}

function generateMessage(noCount) {
  const messages = [
    "No 😔",
    "I'm really sorry 🥺",
    "Pleaseee forgive mee 🥹",
    "PLEASEE IM SORRYYY 😭",
    "IM SORRY LIANNN 💔",
    "SORRY NAAA PLSSSSS 😭💔",
    "SORRY NA DI KO NA UULITIN 😭💔",
    "SORRY NA TALAGA 😭💔",
    "PLEASEEEE LIANNN😭💔",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
    img.src =
        image === "yes"
            ? "https://media.tenor.com/ACi1vdjNbpIAAAAi/%EC%9C%A0%ED%83%80-%ED%86%A4%ED%86%A4%ED%94%84%EB%A0%8C%EC%A6%88.gif"
            : tontonGifs[image];
}

function updateNoButtonText() {
  noBtn.innerHTML = generateMessage(noCount);
}

