const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let addItems = ['HTML', 'CSS', 'SCSS'];
let workList = [];

//FIRS GET MATHOD
app.get('/', (req, res) => {
  // I cutted date function from here

  const currentDate = date.getDate();

  res.render('index', { listTitle: currentDate, items: addItems });
});

//FIRST POST MATHOD
app.post('/', (req, res) => {
  let add = req.body.add;

  if (req.body.list === 'Work') {
    workList.push(add);
    res.redirect('/work');
  } else {
    addItems.push(add);

    res.redirect('/');
  }
});

// SECOND GET MATHOD
app.get('/work', (req, res) => {
  res.render('index', { listTitle: 'Work', items: workList });
});

// SECOND POST MATHOD
app.post('/work', (req, res) => {
  workList.push(add);
});

// THIRD GET MATHOD
app.get('/about', (req, res) => {
  res.render('about');
});

// THIRD POST MATHOD

app.listen(3000, () => {
  console.log('Server is started on port 3000');
});
