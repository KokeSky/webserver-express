const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Jorge Luis',
            edad: 47,
            url: req.url
        };
        res.write(JSON.stringify(salida));
        //res.write('Hola mundo');
        res.end();

    })
    .listen(5000);

console.log('Escuchando en puerto 5000');