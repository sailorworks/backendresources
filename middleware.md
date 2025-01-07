# Middleware in expressjs

Middleware functions are functions that have access to the (req), the (res), and the next middleware function in the application’s request-response cycle.

[Simple flowchart!](https://www.google.com/search?client=firefox-b-d&sca_esv=871f167eb5c7f3d4&q=middleware+flowchart+in+express+js+explained&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWfbQph1uib-VfD_izZO2Y5sC3UdQE5x8XNnxUO1qJLaRfKvQK6KSkFrWZdGNeSbyPYLbGwYpXwowDysIKFZ-15bVLheELS6h_p8gudb4o-YrPxcMwjaqevSKFtBoyk5GjoHC32XO6zKyGT9JIyCu0SixAsopGiq-SoybispGI8aF6OFEM&sa=X&ved=2ahUKEwiG54_t7qCHAxW91TgGHXsHB5AQtKgLegQIDxAB&biw=1440&bih=787&dpr=2#vhid=THOq9eM_Y8tncM&vssid=mosaic)
If let's say req-res cycle is not completed, maybe you would've not given res object then in the postman you can see that the middleware keeps loading as it has nowhere else to go.

Converting simple mongoDb code to mvc code:

```Javascript
const express = require("express");
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;

//Connection
mongoose.connect('mongodb://127.0.0.1:27017/learning')
.then(()=> console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error" , err));

//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required : true,
    },
    lastName : {
        type: String,
    },
    email:{
        type: String,
        required : true,
        unique: true,
    },
    jobTitle: {
        type: String,
    }
},
{timestamps: true}
)

// Model
const User = mongoose.model('user' , userSchema);

//Middlewares
app.use(express.urlencoded({extended:false}));



//Routes
app.get('/users', async(req, res)=>{

    const allDbUsers = await User.find({});

    const html = `
    <ul>
    ${allDbUsers.map(user => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    <ul>
    `
    res.send(html)
})

//REST Api

app.get('/api/users', async(req, res)=>{

    const allDbUsers = await User .find({});
    return res.json(allDbUsers);

})

app.
route('/api/users/:id')
.get( async(req, res)=>{

    const user = await User.findById(req.params.id)
    if(!user) return req.status(404).json({error : 'User Not found'});
    return res.json(user);

})
.patch(async (req,res) =>{
  await User.findByIdAndUpdate(req.params.id ,{ lastName:"Changed" } );
    return res.json({status : "Success"});
})
.delete( async(req , res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "Success"});
})

app.post('/api/users' , async(req , res)=>{
    // TODO : Create new user

    const  body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg: 'ALl fields are required'});
    }


    const result = await User.create({
        firstName : body.first_name,
        lastName : body.last_name,
        email: body.email,
        gender : body.gender,
        jobTitle: body.job_title
    });

    console.log("result" , result);

    return res.status(201).json({msg: "Success"})
});


app.listen(PORT , ()=>{
    console.log(`Server started at Port ${PORT}`)
})
```

This code is simple to understand and we can conclude from this that, if there are more schemas to be handled it can get too cluttered hence we use MVC architecture

[Go through this code](https://github.com/sailorworks/Backendoverall/tree/main/20_Model_View_Controller_in_NodeJS)

Here we can understand how mvc is constructed.

MVC file structure in the code

- The models folder contains the schema definitions and data models. This folder is responsible for defining the structure of the data, handling data validation, and interacting with the database. Essentially, models encapsulate the data and provide an interface for CRUD (Create, Read, Update, Delete) operations on the data.
- the controllers folder contains the logic for handling requests and generating responses. Controllers act as intermediaries between the models (data layer) and the views (presentation layer). They process incoming requests, interact with the models to retrieve or manipulate data, and return the appropriate responses, often by rendering views or returning JSON data in the case of APIs.
- The views folder contains the templates for generating HTML responses. Views are responsible for presenting the data to the UI.
