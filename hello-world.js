const http = require('http')

// created a server createServer method then bind it to 8000 using listen methid
http.createServer(function (req, res) {

    // write head property is used to send a response header
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end('node js hello world!!!!! \n')
}).listen(8000)

// console.log provide a way to write to stderr and stdout stream
console.log('server is running at server 8000')


// global object process contains data and functions related to current program
// argv is strings[] contains all command line arguments given by user
console.log(process.argv)

// to run 
// node hello-world.js my name is akanksha