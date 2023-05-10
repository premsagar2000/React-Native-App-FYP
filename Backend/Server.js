require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const Users = require('./Models/Users')
const router = express.Router();
const app = express()


// Configure middleware-*
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
mongoose.connect("mongodb+srv://hans:hans@cluster0.axxfcfd.mongodb.net/fyp?retryWrites=true&w=majority")
.then(()=>{
    //listener for requests
    app.listen(5000,()=>{
        console.log("connected to database & listening on port",5000)
    })
})
.catch((error)=>{
    console.log("This is the error: ",error)
});



//login
app.use('/login', async (req, res) => {
    const { email, password } = req.body;
    // Check if donor user exists with the given email and password
    const user = await Users.find({ email, password });
    // if (user && user.roleId=="1") {
    //   res.status(200).json({ user, redirect:"/admin", role:'admin' });
    //   return;
    // }
    // else if (user && user.roleId=="2") {
    //   res.status(200).json({ user, redirect:"/ngo", role:'NGO' });
    //   return;
    // }
    if (user) {
      res.status(200).json({ user});
      return;
    }
    else if (user && user.roleId=="4") {
      res.status(200).json({ user, redirect:"/ngo", role:'Needy' });
      return;
    }
    // Check if needy user exists with the given email and password
    // const needyUser = await needy_users.findOne({ email, password });
    // if (needyUser) {
    //   res.status(200).send({ message: "Needy user logged in successfully", redirect:"/about" });
    //   return;
    // }
  
    // If neither donor nor needy user exists, return an error response
    res.status(401).json({ message: "Invalid email or password" });
  })
  