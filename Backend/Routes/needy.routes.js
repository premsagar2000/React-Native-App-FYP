
let express = require('express'),

    router = express.Router();

// User model
let Users = require('../Models/Users');
// router.post('/',(req, res) => {
//     const { title, description, goalAmount,ngoEmail,ngoId } = req.body;
   
//     const url = req.protocol + '://' + req.get('host')
//     const imageFilePath = req.file.filename;
//     const fundraisingpost = new FundraisingPost({
//         title,
//         description,
//         goalAmount,
//         imageFilePath,
//         raisedAmount:0,
//         createdAt:new Date(),
//         ngoEmail,
//         ngoId
//     });
//     fundraisingpost.save().then(result => {
//         res.status(201).json({
//             message: "User registered successfully!",
//         })
//     }).catch(err => {
//         console.log(err),
//             res.status(500).json({
//                 error: err
//             });
//     })
// })
router.get('/', (req, res, next) => {

       Users.find({roleId:"4"})
      .then(data => {
        
        res.status(200).json(data);
      })
      .catch(error => {
        res.status(500).json({
          message: "An error occurred while retrieving posts.",
          error: error
        });
      });
        
    
  });


module.exports = router;