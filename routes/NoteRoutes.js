// import file system
const fs=require('fs');
// import crypto for id
const {crypto} = require('crypto');
// create router object
const router = require ('express').Router();
// 
router.get('/', (req,res)=>{   
    fs.readFile('./db/db.json', 'utf-8', (err,data=>{
        return res.send(JSON.parse(data));
        }
    ))
});
router.post('/',(req,res)=>{
    var {title, text}= req.body;
    if (title && text){
        const newNote={
            title,
            text,
            id: crypto.randomBytes(16).toString('hex')
        };
        fs.readFile('./db/db.json', 'utf-8',(err,data)=>{
        if(err){
            console.error(err);
        }else{
            // return web data string into object
            const parsedData=JSON.parse(data);
            parsedData.push(newNote);
            fs.writeFile('./db/db.json',JSON.stringify(parsedData,null,40));
        }
    })
};
});
router.delete('/:id',(req,res)=>{
    const deleteNote= req.params.id;
    fs.readFile('./db/db.json', 'utf-8',(err,data)=>{
        if(err){
            console.error(err);
        }else{
              // return web data string into object
              const parsedData=JSON.parse(data);
            parsedData.splice(parseData.findIndex(function(i){
                return i.id ===deleteNote;
            }),1);
            fs.writeFile('./db/db.json', JSON.stringify(parsedData,null,4));
        }
    })
});
module.exports= router;
