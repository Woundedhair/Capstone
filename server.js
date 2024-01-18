const express = require('express')
const app = express()
app.listen(4000, () => console.log(`server running on 4000`))

app.use(express.static(`${__dirname}/public`))

app.use(express.urlencoded({ extended: true }));  // For handling forms.
app.use(express.json());  // When we want to be able to accept JSON

const nunjucks = require('nunjucks');
nunjucks.configure('public', {
  autoescape: true,
  express: app,
});

let reviewRating = {
    'Pizza Hut': {
        'ratings': [2, 5],
        'reviews': ['Order took 30 minutes', 'Pizza crust was well done']
      },

    'Sushi Samba': {
        'ratings': [3, 6],
        'reviews': ['Had a distinct taste', 'Terrible customer service']
     },

    'Burger King': {
        'ratings': [4, 2],
        'reviews': ['Better than McDonalds', 'Bathroom was dirty']
     }
}

app.get('/', (req, res) => {
    res.render('index.html', {
        restaurants: reviewRating,
  })
});
  app.post('/review/:name', (req, res) => {
    const name = req.params.name
    const rating = req.body.rating
    const review = req.body.review
    res.send(`${rating}, ${review}, ${name}`)
  });

  
  app.post('/add', (req, res) => {

  })