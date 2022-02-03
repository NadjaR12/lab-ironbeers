const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const { getEnabledCategories } = require('trace_events');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index', {doctitle: "Main Page"});
});

app.get('/beers', (req, res) => {
punkAPI.getBeers()
.then(beersFromApi => {
    res.render('beers', {doctitle: "Beer Page", beers: beersFromApi})
})
})

app.get('/random-beer', (req, res) => {
punkAPI.getRandom()
  .then(responseFromApi => {
    res.render('randombeer', {doctitle: "Random Beer", randombeer: responseFromApi})
  // console.log(responseFromApi)
})
})


app.listen(3000, () => console.log('🏃‍ on port 3000'));

hbs.registerPartials(path.join(__dirname, 'views/partials'));