const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

// Express HBS engine
app.set('view engine', 'hbs');

const parametros = {
    nombre: 'jorge juis ibarra'
}

app.get('/', (req, res) => {
    // let salida = {
    //     nombre: 'Jorge Luis',
    //     edad: 47,
    //     url: req.url
    // };
    //res.send('Hola mundo')
    //res.send(salida);
    res.render('home',
        parametros
        //   {
        //     nombre: 'Jorge Luis',
        //     anio: new Date().getFullYear()
        // }
    );
});

app.get('/about', (req, res) => {
    res.render('about', parametros);
})

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${ port }`));


//