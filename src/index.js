const express = require('express')

const app = express()
const port = 5000

app.get('/', (req, res) =>{
    console.log('User requested landing page. Redirecting to generate page')
    res.redirect('./generateData')
})

app.get('/generateData', (req, res) =>{
    let userName = ""
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
        userName += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    res.json({"userName" : userName,
        "status" : "Process completed"
    })
    
})

app.listen(port, ()=>{
    console.log('My App is listening on port '+port)
})