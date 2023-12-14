//Temporary Fix?
class bracket{
    constructor(){
        this.entrants = {};
        this.placement = {};
        this.size = 0;
        this.entrantAMT = 0;
    }
    getEntrants(){
        return this.entrants;
    }
    setSize(){
        this.size = Math.log2(size) % 1 === 0
    }
    render(element){
        element.innerHTML = '';
        for(let i = 0; i < this.size; i++){
            //add div and spam out columns so that it looks like a bracket
            const div = document.createElement('div');
            div.classList.add('')
            div.innerText = this.entrants[i];
            element.appendChild(div);
        }{
            
        }
    }

    placeRemove(entrant){
        this.placement[entrantAMT--] = entrant;
    }

    reset(){
        this.entrants = {};
    }
}
//Adding references to index.html

const tName = document.getElementById("tNameInput");
const reset = document.getElementById("reset");
const submit  = document.getElementById("submit");
const list = document.getElementById("list");
const main = document.getElementById("inputForm");
const brack = document.getElementsByClassName("match");
const name = document.getElementById("name");
const b = new bracket();
const ppl = {};
const matches = {};
const places = {};
let count = 0;
 
if(localStorage.length >=1){
    if(localStorage.key(0) != "debug" || localStorage.length != 1){
        main.style.display = "none";
    }
}else{
    main.style.display = "block";
}

//Adding event listeners for the buttons
submit.addEventListener("click", ()=>{
    addEntrants();
    let tourney = tName.value;
    tName.value = "";
    name.value = tourney;
    main.style.display = "none";
    
});
function addEntrants(){
    let entrants = list.value;
    entrants = entrants.split(',');
    entrants = entrants.map(e=> e.trim())
    for(i in entrants){
        b.entrants[count] = entrants[i];
        ppl[count++] = entrants[i];
        
    }
    b.entrantAMT  = count;
    list.value = "";
    console.log(ppl);
    
    localStorage.setItem("tournament", JSON.stringify(ppl));
}

reset.addEventListener("click" , ()=>{
    document.getElementById("inputForm").style.display = "block";
    localStorage.clear();
});







