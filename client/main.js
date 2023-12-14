import {bracket} from './bracket.js'
//Adding references to index.html
const tName = document.getElementById("tNameInput");
const reset = document.getElementById("reset");
const submit  = document.getElementById("submit");
const list = document.getElementById("list");
const main = document.getElementById("inputForm");
const brack = document.getElementsByClassName("match");

const ppl = {};
const matches = {};
const places = {};
let count = 0;
if(localStorage.length != 0 && !localStorage.key(0) == "debug"){
    main.style.display = "none";
}else{
    main.style.display = "visible";
}
//Adding event listeners for the buttons
submit.addEventListener("click", ()=>{
    addEntrants();
    let tourney = tName.value;
    console.log(tourney);
    var entry = document.createElement('li');
    entry.innerHTML += ""
    entry.appendChild(document.createTextNode(tourney));
    tName.value = "";
    main.style.display = "none";
    
});
function addEntrants(){
    let entrants = list.value;
    entrants = entrants.split(',');
    entrants = entrants.map(e=> e.trim())
    for(i in entrants){
        bracket.entrants[count] = entrants[i];
        ppl[count++] = entrants[i];
        
    }
    bracket.entrantAMT  = count;
    list.value = "";
    console.log(ppl);
    
    localStorage.setItem("tournament", JSON.stringify(ppl));
}

reset.addEventListener("click" , ()=>{
    document.getElementById("inputForm").style.display = "block";
    localStorage.clear();
});


