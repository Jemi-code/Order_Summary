const time = document.getElementById('timer');
const typingBox = document.getElementById('typing-box');
const displayText = document.getElementById('actual_text');
const note = document.querySelector(".moral");
const resetBtn = document.getElementById("reset");
const nextBtn = document.getElementById("next");
const average = document.createElement("P");


let data = 1;
let runner = 0;
let minutes = 0;
let seconds = 0;
let milsecs = 0;
let interval;

let arrTime = [];


const typeMe = {
    1: "Women do not have to conform, because history is seldom made on well behaved women",
    2: "No Ron, it's not Wingardium LeviOsa it's Wingardium LevioSA", 
    3: "The greatest glory lies not in never falling, but rising each time we fall",
    4: "What do we call a three humped camel? Pregnant!",
    5: "The quick brown fox jumped over your lazy ass because you do not want to get up", 
    6: "The road to success is littered with problems, each makes you stronger, each makes you wiser and braver",
    7: "All I want for Christmas is YOU- Yacht, Objectional new Season of Game of thrones and an Unbelievable amount of money",
    8: "Good men do bad things when they turn their backs when bad things happen",
    9: "Long ago, 9 planets lived together in harmony, but everything changed when IAU attacked",
    10: "Only NASA, master of all space science could stop them, but when the world needed him most, he vanished",
    11: "15 years past Mike Brown and Konstantin Batygin discovered a new planet, a rocky planet named Planet Nine",
    12: "And although it seems cool, it will never replace Pluto in our hearts",
    13: "But I believe Pluto is still a planet"
}

let spellChecker = () => {
    let typeVal = typingBox.value;
    let valueToType = typeMe[data];
    let valueTyped = typeMe[data].slice(0, typeVal.length)

        if(valueToType === valueTyped){
            note.innerHTML = `Done in ${minutes} minutes and ${seconds} seconds`; 
            clearInterval(interval);
            arrTime.push(Math.floor((seconds)));

            average.innerHTML = `Average typing speed is ${(runner/100)/data}`;
            document.querySelector(".typing-area").appendChild(average);
        }
        else if(typeVal === valueTyped){
            note.innerHTML = "Good luck";
        } 
        else{
            note.innerHTML = "There is a typo";
        }
}

// This functions shows how the timer will work 
let updateTimer = () => {
    time.innerHTML = `${addZero(minutes)}:${addZero(seconds)}:${addZero(milsecs)}`;
    runner += 1;

    minutes = Math.floor((runner/100)/60);
    seconds = Math.floor((runner/100) - (minutes*60));
    milsecs = Math.floor((runner) - (seconds*100) - (minutes*6000));
}

//this function will add zeros to the front of the number less than 9
let addZero = (num) => {
    if(num <= 9){
        num = '0' + num;
    }

    return num;
}

//this function will start running as soon as you start typing

let start = () => {
    let typeVal = typingBox.value.length;
    if(typeVal === 0){
        interval = setInterval(updateTimer, 10);
    }
}

let reset = () => {
    clearInterval(interval);
    time.innerHTML = "00:00:00";
    runner = 0;
    typingBox.value = "";
    data = 1;
    displayText.innerHTML = typeMe[data];
}

let next = () => {
    if(data > 12){
        data = 1;
    } else {
        data += 1;
    }
    typingBox.value = "";
    displayText.innerHTML = typeMe[data];
}

//this will start the timer as soon as you start typing
typingBox.addEventListener("keypress", start, false);
typingBox.addEventListener("keyup", spellChecker, false);
resetBtn.addEventListener("click", reset, false);
nextBtn.addEventListener("click", next, false);


const wrapper = document.querySelector(".nav-wrapper");
const items = document.querySelector(".nav-items");
const item = documnet.querySelector(".nav-item");
const bItem = document.querySelector(".nav-item-1");
const mobile = document.querySelector(".lib");
const mobile1 = document.querySelector(".lib1");
const mobile2 = document.querySelector(".lib2");
const mobile3 = document.querySelector(".lib3");
const bars = document.querySelector(".bars");
const bar = document.getElementById("bar");
const X = document.querySelector("#x");

function open() {
    mobile.classList.remove("nav-wrapper");
    mobile1.classList.remove("nav-items");
    mobile2.classList.remove("nav-item");
    mobile3.classList.remove("nav-item-1");

    mobile.classList.add("mobile-wrapper");
    mobile1.classList.add('mobile-items');
    mobile2.classList.add('mobile-item');
    mobile3.classList.add('mobile-item-1');
}

let close = () => {
    mobile.classList.remove('mobile-wrapper');
    mobile.classList.remove('mobile-items');
    mobile.classList.remove('mobile-item');
    mobile.classList.remove('mobile-item-1');

    mobile.classList.add('nav-wrapper');
    mobile.classList.add('nav-items');
    mobile.classList.add('nav-item');
    mobile.classList.add('nav-item-1');
}


bars.addEventListener("click", open, false);
X.addEventListener("click", close, false);
