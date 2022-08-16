const express = require('express')
const app = express()
const path = require('path');
const port = 3000

// Optional since express defaults to CWD/views

app.set('views', path.join(__dirname, 'views'));

// Path to our public directory

app.use(express.static(path.join(__dirname, 'public')));

// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.
app.engine('.html', require('ejs').__express);

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');


app.get('/', (req, res) => {
  res.render('index', {
    title: "Выгул собак"
  })
})

app.get('/dogwalk', (req, res) => {
  res.render('dogwalk', {
    title: "Выгул собак"
  })
})

app.get('/dogsitting', (req, res) => {
  res.render('dogsitting', {
    title: "Передержка собак"
  })
})

app.get('/daycare', (req, res) => {
  res.render('daycare', {
    title: "Няня для собак"
  })
})

app.get('/cynologist', (req, res) => {
  res.render('cynologist', {
    title: "Кинолог"
  })
})

app.get('/job', (req, res) => {
  res.render('job', {
    title: "Работа у нас"
  })
})


app.get('/about', (req, res) => {
  res.render('about', {
    title: "О компании"
  })
})

app.get('/buy', (req, res) => {
  res.render('buy', {
    title: "Заказать выгул собак"
  })
})

app.post('/buy', (req, res) => {
  res.render('success', {
    title: "Выгул заказан"
  })
})

app.get('/contacts', (req, res) => {
  res.render('contacts', {
    title: "Контакты"
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
