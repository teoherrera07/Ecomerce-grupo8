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

app.get('/serviceDetail.html', (req, res)=>{
    res.sendFile(__dirname + '/views/serviceDetail.html');
});

app.get('/carrito.html', (req, res)=>{
    res.sendFile(__dirname + '/views/carrito.html');
});

app.get('/login.html', (req, res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

