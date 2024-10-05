require('dotenv').config();
 const  express = require('express');
 const app=express();
 const expressLayouts = require('express-ejs-layouts');

 const mongoose=require('mongoose');
 mongoose.connect('mongodb://localhost/DATABASE_URL');
 console.log("database connected"); 

 app.set('view engine', 'ejs');
 app.set('views',__dirname+'/views');
 app.set('layout','layouts/layout');
 app.use(expressLayouts);
 app.use(express.static('public'));

 app.use('/',require('./routes/index'));

 app.listen(process.env.PORT||3000);