

let net = require('net')

let server = net.createServer()

// ON,like the events in dom
// CONNECTION is one of the events
server.on('connection', (conn) => {
    // conn is a object,which also has methon ON
    // there is a callback function,but I can not understand
    // where come from the (event) objec CONN
    // who create it (windows api?)
    conn.on('data', data => {
        console.log(data.toString())

        conn.write('http/1.1 200 ok\r\n')
        conn.write('Content-Type: text/html\r\n')
        conn.write('\r\n')
        conn.write(`<meta charset='utf-8'>`)
        conn.write(`<h1>it works ${new Date()}</h1>`)

        conn.end()
    })
})

let port = 8000
// on port, start listening and log
// call the method of object server to do those
server.listen(port, () => {

    console.log('listening on port', port)
})