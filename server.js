const express = require('express');
const cors = require('cors');
//DB implementation
const mongoose = require("mongoose")
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
const budgetModel = require("./models/budgetSchema")
let url = 'mongodb://localhost:27017/personal_budget';

app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static('public'));
  

app.get('/budget', (req, res) => {
    //res.json(budget);
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Connected to the database")
        budgetModel.find({})
                .then((data)=>{
                    res.json(data);
                    mongoose.connection.close()
                })
                .catch((connectionError)=>{
                    console.log(connectionError)
                })
    })
    .catch((connectionError) => {
        console.log(connectionError)
    })
    

}); 

app.post('/addbudget', (req, res) => {
    //res.json(budget);
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        var newBudget = {
            id: req.body.id,
            name: req.body.name,
            budgetval: req.body.budgetval,
            sectioncolor: req.body.sectioncolor
        };
        budgetModel.insertMany(newBudget)
                .then((data)=>{
                    res.json(data);
                    mongoose.connection.close()
                })
                .catch((connectionError)=>{
                    console.log(connectionError)
                });
    })
    .catch((connectionError) => {
        console.log(connectionError)
    });
}); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});