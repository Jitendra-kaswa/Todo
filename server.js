const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const cookieParser = require('cookie-parser');
const port = 8000;
const app= express();

// import sass into project
const sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css', 
    debug:true, 
    outputStyle:'extended',
    prefix:'/css'
}))

// setup the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(expressLayouts);
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static('assets'));

app.use('/',require('./routers'));

app.listen(port);