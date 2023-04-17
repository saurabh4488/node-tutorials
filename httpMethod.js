const http = require('http');

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('welcome to our home page')
        res.end()
    }
    if(req.url === '/about'){
        res.write('Here is our short history')
        res.end()
    }
    res.write(`
        <h1>Oops!</h1>
        <p>We cant find the page u are looking for</p>
        <a href="/">Back Home</a>
        `)
        res.end
})

server.listen(5000)