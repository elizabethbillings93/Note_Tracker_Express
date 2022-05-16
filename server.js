// installed express library
const express = require ('express');
// calling express and giving variable
const app = express();
// calling filesystem
const fs= require('fs');
// calling path library
const path= require('path');
// make a route a variable
const api = require('./routes');
// Use open port or 3001
const PORT = process.env.port || 3001;
// // Middelwares
app.use (express.urlencoded({extended:true}));
app.use (express.json());
app.use (express.static ('public'));
app.use('/api',api);
// create paths
app.get('/', (req,res)=>
    res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/notes',(req,res)=>
    res.sendFile(path.join(__dirname, 'public/notes.html')));

 
// listen to port
app.listen(PORT,()=>{
    console.log(`Server listening to http://localhost:${PORT}`);});

