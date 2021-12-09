const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path')
const expressLayout = require('express-ejs-layouts')

// app.set('views', path.join(__dirname, '/resources/views'))
// app.set('views', (`${__dirname}/resources/views`))
app.set('views', './resources/views')

app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.render('home');
})



app.use(expressLayout);
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('server started successfuly')
})