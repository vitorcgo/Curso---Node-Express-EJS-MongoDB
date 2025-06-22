const http = require('http')

const port = 8080;
const server = http.createServer((req, res) => {
    if (req.url == '/home') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>Pagina Principal</h1>")
    }

    if (req.url == '/users') {
        const users = [
            {
                name: 'Allan Henrique',
                email: 'Allan@henrique.com'
            },
            {
                name: 'Vitor Cavalcante',
                email: 'zbro2018@gmail.com',
            },
        ];

        res.writeHead(200, {"Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    }
})

server.listen(port, () => console.log(`Rodando da porta ${port}!`));