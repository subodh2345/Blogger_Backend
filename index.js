
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5001
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const dbConnection = require('./helper/mongoose');
dbConnection()
.then(() => {
        console.log('Connected to MongoDB');
        
        const authrouter = require('./routers/author');
        const catrouter = require('./routers/category');
        const postrouter = require('./routers/post');
        const userrouter = require('./routers/Users')


        app.use('/author', authrouter);
        app.use('/post', postrouter);
        app.use('/category', catrouter);
        app.use('/Users',userrouter)

        //const commentrouter = require('./routers/');
        //app.use('/comment', commentrouter);

       // app.listen(port, () => {
        // console.log(`Example app listening on port 3000`);
    //  });
})
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})