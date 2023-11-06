// CREATING A SERVER IN NODE
const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // CREATING AN API
    if (req.url == "/") {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.end("Hello Welcome to INST377")
    } else if (req.url == "/contact") {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        var contactInfoJson = {
            "contactName": "Kristina Finley",
            "contactEmail": "kfinley@umd.edu",

        }
        res.end(JSON.stringify(contactInfoJson))
    } else if (req.url == "/admin") {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end('<html><body><p>This is the admin page</p></body></html>')
    } else {
        res.writeHead(404)
        res.end('<html><body><h1>NOT FOUND</h1></body></html>')
    }
})

//     res.writeHead(200, {
//         // 'Content-Type': 'text/plain'
//         'Content-Type': 'application/json'
//     })
//     // res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain')
//     var helloWorldJson = {
//         "hello": "world"
//     }
//     res.end(JSON.stringify(helloWorldJson))
// })

// RUNNING THE SERVER
server.listen(port, hostname, () => {
    console.log("RUNNING SERVER!")
})