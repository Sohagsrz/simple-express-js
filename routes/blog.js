const express = require('express')
const app = express()
const path = require ("path");
const router= express.Router();

app.get("/" , (req, res)=>{
    console.log("blog found")
    res.sendFile(path.join(__dirname , "../templates/index.html"))
})

module.exports = router