require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Users = require('./Models/Users')
const needy_routes = require('./Routes/needy.routes');
const donor_routes = require('./Routes/donor.routes');
const fundraisingpost_api = require('./Routes/fundraisingpost.routes')
const DonationHistory = require('./Models/DonationHistory')
const router = express.Router();
const axios = require('axios');

// Disable SSL verification (for development only)


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
      res.status(200).json({ user, redirect:"DonorDashboard", role:'Donor' });
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
// Define endpoint to create a fundraising post
app.use('/fundraising-posts', fundraisingpost_api)
app.use('/needy', needy_routes);
app.use('/donors',donor_routes);

//route to store donations in Donation History
app.post('/donation-history', (req, res) => {
  const { donor_name, donor_email, donation_type,  email } = req.body;
  let donation_quantity = donation_type === "food" ? req.body.food_quantity+" ("+req.body.food_type+" )" : donation_type=='cloth' ? req.body.cloth_quantity + " ( "+req.body.cloth_quality+" )" : req.body.amount
  // if(donation_type=='food'){
  //   donation_quantity = req.body.food_quantity
  // }
  // else if(donation_type=='money'){
  //  const {donation_quantity} = req.body.amount
  // }
  // else if(donation_type=="cloth"){
  //  const {donation_quantity} = req.body.cloth_quantity + " ( "+re.body.cloth_quality+" )" 
  // }
  const newDonation = new DonationHistory({
     donor_name,
     donor_email, 
     donation_type, 
     donation_quantity, 
     donation_date: new Date(), 
     email });
  newDonation.save()
    .then(donation => {
      console.log('New donation added:', donation);
      res.status(201).json(donation);
    })
    .catch(error => {
      console.error('Error adding new donation:', error);
      res.status(500).json({ error: 'Error adding new donation' });
    });
});

//get the donations from donation history in NGOs donation history
app.use('/updated-donations-history',async(req,res)=>{
  try {
    const {recipient_email} = req.body
    const donations = await DonationHistory.find({email:recipient_email});
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})
app.use('/needy-updated-donations-history',async(req,res)=>{
  try {
    const {email} = req.body
    const donations = await DonationHistory.find({email});
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

app.use('/donation-offers', async (req, res) => {
  try {
    const data = {
      typeId:'1',
      from:'643b02f01411ce2ae94406fe',
      to:'643b02f01411ce2ae94406ff',
      quantity:'1000',
      description:'food donation'
    }
    const donationOffer = new DonationOffer(data);
    const result = await donationOffer.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

