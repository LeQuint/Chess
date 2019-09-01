const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

// Passport config
require('./config/passport')(passport);

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(()=> console.log("MongoDB Connected ... "))
    .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Express session
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global Vars
app.use((req,res,next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/gamefiles', express.static(__dirname + "/gamefiles"));
app.use('/images', express.static(__dirname + "/gamefiles/images"));
app.use('/js', express.static(__dirname + "/js"));
app.use('/css', express.static(__dirname + "/css"));
app.use('/RTC', express.static(__dirname + "/RTC"));

const port = process.env.PORT || 8080;        // set our port

// START THE SERVER
// =============================================================================
const server = app.listen(port, () => {
    const host = server.address().address;
    console.log(`Server listening at http://${host}:${port}`);
})