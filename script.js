let storyText = document.getElementById("storyText");
let friend1 = "";
let friend2 = "";
let friend3 = "";

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");

// let optionsDisplay = window.getComputedStyle(document.getElementById("optionButtons")).display;
// let endDisplay = window.getComputedStyle(document.getElementById("theEnd")).display;
// let friendInputDisplay = window.getComputedStyle(document.getElementById("friendInput")).display;

let optionsDisplay = "flex"
let endDisplay = "initial"
let friendInputDisplay = "grid"
let storyDisplay = "flex"


let storyContext = "";

let gameState = "startPage"

const options = {
    1 : option1,
    2 : option2,
    3 : option3
};
// window.onload = function () {
//     document.getElementById("optionButtons").style.display = "none";
//     document.getElementById("theEnd").style.display = "none";
//     document.getElementById("friendInput").style.display = "none";
// }

const friendInputs = [
    document.getElementById("friend1input"),
    document.getElementById("friend2input"),
    document.getElementById("friend3input")
]

for(let i=0; i<friendInputs.length; i++){
    friendInputs[i].addEventListener("keydown", function(event){
        if(event.key === "Enter" && i < friendInputs.length - 1) {
            event.preventDefault();
            friendInputs[i + 1].focus();
        }
    });
}

let selectedOption = 0;
window.addEventListener("keydown", function(event){
    if(event.key === "ArrowLeft" || event.key === "ArrowRight"){
        let optionsList = []
        for(let i=1; i<=3; i++){
            if(options[i].style.display !== "none"){
                optionsList.push(options[i]);
            }
        }
        if(this.document.activeElement === option1 || this.document.activeElement === option2 || this.document.activeElement === option3){
            if(event.key === "ArrowLeft"){
                selectedOption = (selectedOption -1 + optionsList.length) % optionsList.length;
            }
            if(event.key === "ArrowRight"){
                selectedOption = (selectedOption + 1) % optionsList.length
            }
        }
        else{
            selectedOption = 0;
        }
        
        
        optionsList[selectedOption].focus();
    }
    if(event.key === "Enter" && gameState === "startPage"){
        event.preventDefault();
        gameState = "friendInput"
        start();
    }
});


document.getElementById("friendInput").addEventListener('submit', function(e) {
    e.preventDefault();
    getFriendInput();
});

function setText(text){
    storyText.innerText = text;
}
function start(){
    gameState = "friendInput"
    storyText.style.display = storyDisplay
    storyText.innerText = "Please name 3 friends to bring along with you:";
    document.getElementById("friendInput").style.display = friendInputDisplay;
    friendInputs[0].focus();
    document.getElementById("start").style.display = "none";
}
function getFriendInput(){
    friend1 = friendInputs[0].value;
    friend2 = friendInputs[1].value;
    friend3 = friendInputs[2].value;
    document.getElementById("friendInput").style.display = "none";
    playGame();
}
function playGame(){
    gameState = "story";
    storyContext = "";
    storyText.innerText = `It's been a long week of studying and finals, and you just finished your last class. You and your friends are ready celebrate! Your friend has a cabin in the woods, and she's throwing a huge party. You drive with your friends up the mountain road, exited to catch a break, when suddenly, your car starts to sputter and die. You are stranded on the side of the road in the middle of the night. You try to call for help, only to realize you have no cell service. Luckily, you stopped in front of a house. 

    "Thank goodness", ${friend1} says. "We can ask those guys for help." 
        
    Your other friends aren't sure of that's the greatest idea. 
        
    "let's just stay here", ${friend2} suggests. 
        
    ${friend3} thinks you should start walking to find a gas station or something.
    
    Do you WAIT, WALK to find help, or GO to the house?`;

    document.getElementById("optionButtons").style.display = optionsDisplay;
    option1.innerText = "Wait";
    option2.innerText = "Walk";
    option3.innerText = "Go";
    
}
function chooseOption(number){
    let chosenOption = options[number].innerText;
    if(storyContext !== ""){
        storyContext += chosenOption.replace(/\s+/g, "");
    }
    else{
        storyContext = chosenOption.toLowerCase();
    }
    if(typeof storyData[storyContext].text === "function"){
        storyText.innerText = storyData[storyContext].text();
    }
    else{
        storyText.innerText = storyData[storyContext].text;
    }
    let currentOptions = [option1, option2, option3];
    //document.activeElement.blur();
    let undefinedOptions = 0;

    for(let i=0; i<currentOptions.length; i++){
        let optionTag = "o" + (i+1);
        if(storyData[storyContext][optionTag] === "" || storyData[storyContext][optionTag] === undefined){
            console.log("hid");
            currentOptions[i].style.display = "none";
            undefinedOptions++;
        } else{
            currentOptions[i].innerText = storyData[storyContext][optionTag];
        }
        if(undefinedOptions >= 3){
            document.getElementById("theEnd").style.display = endDisplay;
        }
    }
}