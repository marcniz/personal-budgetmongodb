const mongoose = require("mongoose")
const budgetsModel = require("./models/budget_schema")

let url = 'mongodb://localhost:27017/personal_budget';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log("Connected to the database")
            // List All Entries
            /*
            budgetsModel.find({})
                    .then((data)=>{
                        console.log(data)
                        mongoose.connection.close()
                    })
                    .catch((connectionError)=>{
                        console.log(connectionError)
                    })
            */

            // Fetch one document
            /*
            budgetsModel.find({id: 2})
                    .then((data)=>{
                        console.log(data)
                        mongoose.connection.close()
                    })
                    .catch((connectionError)=>{
                        console.log(connectionError)
                    })
            */

            // Create new document
            
            // let newData = new budgetsModel({id: 7, name: "Car Insurance", budgetval: 850, sectioncolor: "#474A63"});
            // budgetsModel.insertMany(newData)
            //         .then((data)=>{
            //             console.log(data)
            //             mongoose.connection.close()
            //         })
            //         .catch((connectionError)=>{
            //             console.log(connectionError)
            //         })
            
            
            // Update
            /*
            let newData = {$set: {id: 10, name: "Updated Content"}};;
            budgetsModel.update({id: 10}, newData)
                    .then((data)=>{
                        console.log(data)
                        mongoose.connection.close()
                    })
                    .catch((connectionError)=>{
                        console.log(connectionError)
                    })
            */
            
            // Delete or remove
            /*
            budgetsModel.remove({id: 10})
                    .then((data)=>{
                        console.log(data)
                        mongoose.connection.close()
                    })
                    .catch((connectionError)=>{
                        console.log(connectionError)
                    })
            */
        })
        .catch((connectionError) => {
            console.log(connectionError)
        })