const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    let access_token = ""
    let refresh_token = ""
    if(req.query.access_token || req.query.refresh_token) {
        access_token = req.query.access_token
        refresh_token = req.query.refresh_token
    }
    res.render('index', {
        access_token, refresh_token
    })
});
app.get('/register', (req,res) => res.render('register'))

app.listen(8000, () => console.log('Server is running on port 8000'))