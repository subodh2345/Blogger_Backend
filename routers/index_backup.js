
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) =>{
  console.log('this is use one');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/aboutus', (req, res) => {
    res.send('This is about us!')
  })

  app.get('/contactus', (req, res) => {
    res.send('This is contact us!')
  })

  app.get('/getstudname/:sid/:cid/:name/:email/:Address', (req, res) => {
    console.log(req.params);
    let studID = req.params.sid
    // select * FROM student where id = id;
    res.send(`The student id is : ${studID}`)
  })

  
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})