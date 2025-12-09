const express = require("express")
const app = express()
const PORT = 3000

const connection = require(`./database/connection`)

app.use(express.static(`public`))

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);

})

app.get(`/`, (req, res) => {
    res.send(`Welcome to my blog`)
})