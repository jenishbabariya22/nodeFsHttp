let http = require("http")
let fs = require("fs")

let server = (req, res) => {
    let file = ""
    switch (req.url) {
        case '/':
            file = './home.html'
            break;
        case '/about':
            file = './about.html'
            break;
        case '/contact':
            file = './contact.html'
            break;
    }

    fs.readFile(file, (err, data) => {
        res.end(data)
    })
}

http.createServer(server).listen(8000)