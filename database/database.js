import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'
class supabase{
    constructor(){
        const supabase = createClient(process.env.dbURL, process.env.dbAPI);
        this.supabase.reset();
    }

async addEntrant( user){
    const {error} = await supabase.from('Entrants').insert({name: user});
}
async addMatchup(user1 , user2){
    const {error} = await supabase.from('matchups').insert({Entrant1: user1 , Entrant2: user2});
}
async declareWinner(user,matchID){
    const {data,error} = await supabase.from('matchups').update({winner: user}).eq({id: matchID});
}
async reset(){
    const {error} = await supabase.from('Entrants').delete();
    const {error2} = await supabase.from('matchups').delete();
    const {error3} = await supabase.from('Placement').delete();
}

async place(user , place){
    const{error} = await supabase.from('Placement').insert({Entrant: user , place})
}
async final(){
    const{data,error} = await supabase.from('Placement').select('id, entrant, Place').order('Place', {ascending: true});
}
}


export default supabase;