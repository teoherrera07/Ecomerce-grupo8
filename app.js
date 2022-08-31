const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/register', (req, res)=>{
    res.render('usuarios/register');
});

app.get('/serviceDetail', (req, res)=>{
    res.render('service/serviceDetail');
});

app.get('/carrito', (req, res)=>{
    res.render('service/carrito');
});

app.get('/logIn', (req, res)=>{
    res.render('usuarios/login');
});

app.get('/createService', (req, res)=>{
    res.render('service/createService');
});



app.listen(3000, ()=>{
  console.log('Servidor funcionando');
});
