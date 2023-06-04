require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Users = require('./Models/Users')
const router = express.Router();
const app = express()

const bodyParser = require("body-parser");

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
  console.log(req.body)
    const { email, password } = req.body;
    // Check if donor user exists with the given email and password
    const user = await Users.findOne({ email, password });
    if (user && user.roleId=="3") {
      res.status(200).json({ user, redirect:"Dashboard2", role:'Donor' });
      return;
    }
    else if (user && user.roleId=="4") {
      res.status(200).json({ user, redirect:"NeedyDashboard", role:'Needy'});
      return;
    }
   
   
  
    // If neither donor nor needy user exists, return an error response
    res.status(401).json({ message: "Invalid email or password" });
  })
  



// donor-routes
app.use('/donor-signup',async (req, res) => {

  try {
    const {name, address, email, phone, cnic, password } = req.body;
    console.log(req.body);
    const newUser = new Users({
       roleId:'3',
       name,
       password,
       email,
       address,
       phone,
       cnic 
    })
    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json({savedUser}); // Return the saved user as a JSON response with a 201 status code
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' }); // Handle errors
  }
})




// needy-routes
app.use('/needy-signup', async (req, res) => {
  try {
    const {name, address, email, phone, cnic, password } = req.body;
    // Create a new user object
    const needy = new Users({
      roleId:'4',
      name,
      password,
      email,
      address,
      phone,
      cnic
    });

    // Save the user to the database
    await needy.save();

    // Return a success response
    res.status(200).json({needy});
  } catch (err) {
    // Return an error response
    console.error(err);
    res.status(500).send({ message: "Error creating user" });
  }
}
)




