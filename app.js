const express = require('express');
const app = express();
const cal = require('./calculator');

app.get('/add', (req, res) => {
    res.json({
        result: cal.add(parseInt(req.query.value1), parseInt(req.query.value2))
    });
});

app.get('/subtract', (req, res) => {
    res.json({
        result: cal.subtract(parseInt(req.query.value1), parseInt(req.query.value2))
    });
});

// app.listen(3000);
/* Para hacer las pruebas con supertest no puedo tener
el puerto aquí porque cuando corra las pruebas va a fallar, porque 
lo va a intentar levantar cada vez, pero ya esta ocupado*/

module.exports = app;