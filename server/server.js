require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// routes of the app
app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, {useNewUrlParser: true}, (err, res) => {
    if (err) throw err;
    console.log('Conexion a bd realizada');
});

app.listen(process.env.PORT, ()=> console.log(`Escuchando en puerto ${process.env.PORT}`))