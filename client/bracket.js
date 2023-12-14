export class bracket{
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
        this.size = Math.log2(this.entrants.width) % 1 === 0
    }
    render(element){
        element.innerHTML = '';
        for(let i = 0; i < this.size; i++){
            //add div and spam out columns so that it looks like a bracket
            const div = document.createElement('div');
                div.classList.add('')
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