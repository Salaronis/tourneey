import express from 'express';
import supabase from './database/database';
const app = express();
const PORT = 3000;


//get Tournaments
/*
app.get('/tournaments' , (req,res)=>{
    const {user} = req.body;
    
    return res.json();
});


app.post('/createTournament' , (req,res)=>{

});
*/
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is successfully Running and App is listening on PORT:" + PORT);
    else
        console.log("Error occurred, server cannot start", error);

});