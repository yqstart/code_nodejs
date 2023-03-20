const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('express')
})

app.listen(8080, () => {
    console.log(`app running at http://localhost:8080`)
})