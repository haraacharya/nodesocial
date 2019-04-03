const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("this is root route")
})

const port = "8080"
app.listen(port, () => {
  console.log(`A nodejs API is listening on port: ${port}`)
})
