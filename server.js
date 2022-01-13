const http = require ('http');

//cria um servidor
const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.statusCode = 200;
    res.end('<h1>Hello World</h1>')
})

server.listen(3001, () => {
    console.log('servidor ativo')
})