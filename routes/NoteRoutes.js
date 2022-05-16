// import file system
const fs=require('fs');

// import crypto for id
const crypto = require('crypto');
// create router object
const router = require ('express').Router();
// get request
router.get('/', (req,res)=>{   
    fs.readFile('./db/db.json', 'utf-8', (err,data)=>{
        return res.json(JSON.parse(data));
        }
    )
});
// post request
router.post('/',(req,res)=>{
    console.log("this route works");
    var {title, text}= req.body;
    if (title && text){
        const newNote={
            title:title,
            text:text,
            id: crypto.randomBytes(16).toString('hex')
        };
        const allNotes= JSON.parse(fs.readFileSync('./db/db.json'))
            // return web data string into object
            allNotes.push(newNote);
            fs.writeFileSync('./db/db.json',JSON.stringify(allNotes));
            res.json(JSON.parse(allNotes));
};
});

module.exports= router;
