const {app, port, hostname} = require('./app')


// ren the server
app.listen(port, hostname, () =>{
   console.log(`Your server is running : http://${hostname}:${port}`)
})