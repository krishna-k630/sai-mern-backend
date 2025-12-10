
const express =require('express');
const connectToDB =require ('./database/db');
const bookRoutes= require('./routes/book-routes')
const app = express();

const PORT=process.env.PORT || 3000;

// connect database

connectToDB();

// middleware

app.use(express.json());


// routes

app.use('/api/books',bookRoutes);


const port=3000;

app.listen(port,()=>{
    console.log(`Server is now running port ${port}`)
})