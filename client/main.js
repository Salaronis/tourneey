
//Adding references to index.html
const tName = document.getElementById("tNameInput");
const ListInput = document.getElementById("Einput");
const reset = document.getElementById("reset");
//const Add = document.getElementById("submitL");
const submit  = document.getElementById("submit");
const list = document.getElementById("list");
//const tList = document.getElementById("tourneyList");
//const eList = document.getElementById("EntrantsList");
const ppl = {};
const matches = {};
const places = {};
let count = 0;
if(localStorage.length != 0){
    document.getElementById("inputForm").style.display = "none";
}
//Adding event listeners for the buttons
submit.addEventListener("click", ()=>{
    addEntrants();
    let tourney = tName.value;
    console.log(tourney);
    var entry = document.createElement('li');
    entry.innerHTML += ""
    entry.appendChild(document.createTextNode(tourney));
    //tList.appendChild(entry);
    tName.value = "";
    document.getElementById("inputForm").style.display = "none";
});

function addEntrants(){
    let entrants = list.value;
    entrants = entrants.split(',');
    entrants = entrants.map(e=> e.trim())
    console.log(entrants);
    for(i in entrants){
        ppl[count++] = entrants[i];
    }
    list.value = "";
    console.log(ppl);
    localStorage.setItem("tournament", JSON.stringify(ppl));
}

reset.addEventListener("click" , ()=>{
    document.getElementById("inputForm").style.display = "block";
    localStorage.clear();
});


