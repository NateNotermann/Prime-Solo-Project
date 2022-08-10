const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const allComedians = require('./routes/allComedians.router');
const comedianDetailsRouter = require('./routes/comedianDetails.router.js');
const favorites = require('./routes/favorites.router')
const search = require('./routes/Search.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);

// get all comedians route
app.use('/api/comedians', allComedians);

// get comedian Details route
app.use('/api/comedianDetails', comedianDetailsRouter);

// get Favorites route
app.use('/api/Favorites', favorites);

// get Search route
app.use('/api/search', search);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
