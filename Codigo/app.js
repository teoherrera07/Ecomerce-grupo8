const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/register.html', (req, res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/productDetail.html', (req, res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/productCart.htmal', (req, res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/login.html', (req, res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

