const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let programLanguages = []

app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.render('index', {allProgName : programLanguages})
})

app.get('/contact', (req, res) => {
  res.render('contact', {})
})

app.post('/', (req, res) => {
  const pLanguage = req.body.programmingLanguage
  programLanguages.push(pLanguage)
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})