// import file system
const fs=require('fs');
// import crypto for id
const crypto = require('crypto');
// create router object
const router = require ('express').Router();
// get request
router.get('/', (req,res)=>{   
    fs.readFile('./db/db.json', 'utf-8', (err,data)=>{
        return res.send(JSON.parse(data));
        }
    )
});
// post request
router.post('/',(req,res)=>{
    var {title, text}= req.body;
    if (title && text){
        const newNote={
            title,
            text,
            id: crypto.randomBytes(16).toString('hex')
        };
        fs.readFile('./db/db.json', 'utf-8',(err,data)=>{
        if(err) {
            console.log(err);
        }else{
            // return web data string into object
            const parsedData=JSON.parse(data);
            parsedData.push(newNote);
            fs.writeFile('./db/db.json',JSON.stringify(parsedData,null,40));
        }
    })
};
});

module.exports= router;
