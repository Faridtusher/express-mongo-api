const {app, port, hostname} = require('./app')
const connectDb = require('./config/connectionDb')


// ren the server
app.listen(port, hostname, async () =>{
   console.log(`Your server is running : http://${hostname}:${port}`)
   await connectDb();
})
