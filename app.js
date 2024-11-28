// No selection was provided, so I'll add a general improvement to the code
// by adding error handling to the mongoose connection and the app.listen method

mongoose.connect(process.env.DB_URL)
.then(()=>{console.log("DB connected")})
.catch((err)=>{
  console.log(err);
  process.exit(1); // exit the process if there's an error connecting to the DB
});

app.listen(port, () => {
  console.log(`Live at port ${port}`);
}).on('error', (err) => {
  console.log(err);
  process.exit(1); // exit the process if there's an error starting the server
});

require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const mongoSanitize = require('express-mongo-sanitize');
const port = process.env.PORT || 8080;

// sk_test_51NCgZhSGLp42UHm4pPgngGPHKynyCkkbe8oH7mFwVyGt6TozUodCPX6I3B1yLj9J6Czuah6wD88B2uQKGyo31EHH00kG40YstW  : Vishal


const stripe = require("stripe")(
  "sk_test_51OI9XuSDvaj3CBe9tRkyOj2Ph18rS0LFuckcwSCsTJS5aoLDHz9kKpmuaBrddOl9k7AXew87ONYY0IaXyPHXXQV600m6FQ4XH6"
);

mongoose.connect(process.env.DB_URL)
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(mongoSanitize());

// Or, to replace these prohibited characters with _, use:
app.use(
  mongoSanitize({
    replaceWith: '_',
  }),
);
const sessionConfig = {
  secret: 'weneedsomebettersecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
      httpOnly: true,
      expires: Date.now() + 1000* 60 * 60 * 24 * 7 * 1,
      maxAge:1000* 60 * 60 * 24 * 7 * 1
  }
}

app.use(session(sessionConfig));
app.use(flash());


// Initialising middleware for passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Telling the passport to check for username and password using authenticate method provided by the passport-local-mongoose package
passport.use(new LocalStrategy(User.authenticate())); 

app.use((req,res,next)=>{
  // console.log(req.query);
  res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

// APIs
const productApis = require('./routes/api/productapi');

// routes
const ProductRoutes = require('./routes/product');
const ReviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');


app.use(ReviewRoutes);
app.use(ProductRoutes);
app.use(authRoutes);
app.use(productApis);
app.use(cartRoutes);


app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Live at port ${port}`);
});

