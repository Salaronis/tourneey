
//Adding references to index.html
const tName = document.getElementById("tNameInput");
//const ListInput = document.getElementById("Einput");
//const Add = document.getElementById("submitL");
//const submit  = document.getElementById("submit");
const list = document.getElementById("list");
//const tList = document.getElementById("tourneyList");
//const eList = document.getElementById("EntrantsList");

//Adding event listeners for the buttons
submit.addEventListener("click", ()=>{
    addEntrants();
    let tourney = tName.value;
    console.log(tourney);
    var entry = document.createElement('li');
    entry.innerHTML += ""
    entry.appendChild(document.createTextNode(tourney));
    tList.appendChild(entry);
    document.getElementById("view").innerText = tourney;
    document.getElementById("view").style.visibility = "visible";
    tName.value = "";
    document.getElementsByClassName("center").style.display = "none";
});
/*
function addEntrants(){
    let entrants = list.value;
    entrants = entrants.split(',');
    entrants = entrants.map(e=> e.trim())
    console.log(entrants);
    for(i in entrants){
        let entry = document.createElement('li');
        entry.innerHTML += ""
        entry.appendChild(document.createTextNode(entrants[i]));
        eList.appendChild(entry);
    }
    list.value = "";
}
*/
ListInput.addEventListener("click" , ()=>{
    addEntrants();
});


