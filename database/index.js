import express from 'express';
import supabase from './database.js';
const app = express();
const port = 5500;


//get Tournaments
app.use('/', express.static('client')); 
app.post('/addEntrants' , (req,res)=>{
    const{user} = req.body;
    supabase.addEntrant(user);
    res.status(200).json({status: 'success'});
});


app.post('/createTournament' , (req,res)=>{

});

app.post('/declareWin' , (req,res)=>{

});
app.get('/Placements', (req,res)=>{
    res.status(200).json(supabase.final());
});

app.all('*', async (request, response) => {
    response.status(404).send(`Not found: ${request.path}`);
  });

app.listen(port, (error) =>{
    const msg = `$ Server started on http://localhost:${port}`;
    if(!error)
        console.log(msg);
    else
        console.log("Error occurred, server cannot start", error);

});