
//Adding references to index.html
const tName = document.getElementById("tNameInput");
const ListInput = document.getElementById("Einput");
const Add = document.getElementById("submitL");
const submit  = document.getElementById("submit");
const list = document.getElementById("list");

//Adding event listeners for the buttons
submit.addEventListener("click", ()=>{
    let tourney = tName.value;
    console.log(tourney);
    tName.value = "";
    
});

ListInput.addEventListener("click" , ()=>{
    let entrants = list.value;
    entrants = entrants.split(',');
    entrants = entrants.map(e=> e.trim())
    console.log(entrants);
    list.value = "";
});


