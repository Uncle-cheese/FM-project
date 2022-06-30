const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRoutes = require('./Routes/userRoutes')

const app = express();
const port = 3000

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true,}))


//api routes
app.use('/users',userRoutes)






app.listen(port,()=>{console.log(`app listening to port ${port}`)})