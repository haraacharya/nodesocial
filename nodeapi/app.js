const express = require('express')
const app = express()
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()


//db
mongoose.connect(process.env.MONGO_URI, { useNewURLParser: true , uri_decode_auth: true }).then(() => {console.log('db connected')})

mongoose.connection.on("error", err => {
  console.log(`db connection error: ${err.message}`)
});


// bring routes
//const postRoutes = require('./routes/post')
//Or use object destructuring
const postRoutes = require('./routes/post')

const myOwnMiddleware = (req, res, next) => {
  console.log("my own middleware")
  next()
}

//use middle ware
app.use(morgan('dev'))
app.use(myOwnMiddleware)
app.use('/', postRoutes)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`A nodejs API is listening on port: ${port}`)
})
