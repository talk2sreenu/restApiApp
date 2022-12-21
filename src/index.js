const express = require('express')

const app = express()
const port = 5000

app.get('/generateData', (req, res) =>{
    let userName = ""
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
        userName += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    res.json({"userName" : userName})
})

app.listen(port, ()=>{
    console.log('My App is listening on port '+port)
})