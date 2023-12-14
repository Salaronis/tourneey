import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'



const supabase = createClient(process.env.dbURL, process.env.dbAPI);
/*
async function getTournaments(user){
    
    const {data , error} = await supabase.from('tournaments').select().eq('User' , user);
}

async function getParticipants(tournament){
    const {data, error} = await supabase.from('participants').select('name').eq("tournament" , tournament);

}

async function AddParticipant(tournament , user){
    const {data,error} = await supabase.from('Entrants')
    localStorage.setItem(tournament ,);
}
*/

export default supabase;