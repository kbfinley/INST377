const http = require('http');
const url = require('url');

http.createServer((req,res) => {
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<html><body><p>This is my home page.</p></body></html>`);
        res.end();   
    }else if(req.url == '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<html><body><p>This is my contact page.</p></body></html>`);
        res.end();   
    }else if(req.url == '/json'){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: "This is from NODE!"}));   
    }else if(req.url.match('/formSubmit')){
        const requestURL = url.parse(req.url, true);  
        console.log(req.url);

        console.log(JSON.stringify(requestURL.query));
        const msg = `Query Params: ${JSON.stringify(requestURL.query)}`
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(msg);
        res.end()
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(`<html><body><h1>PAGE NOT FOUND</h1></body></html>`);
        res.end();  
    }
}).listen(8080)

console.log('Server running on Port 8080')