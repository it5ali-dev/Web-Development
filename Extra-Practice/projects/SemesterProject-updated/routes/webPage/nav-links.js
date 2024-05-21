const express = require("express");
const router = express.Router();


router.get('/aboutUs', (req, res) => {
    
    res.render('../aboutUs'); 
  });
  
//   router.get('/list', (req, res) => {
    
//     res.redirect("/api/meat/list") 
//   });

  // router.get('/services',(req,res)=>{
  //   res.render("../services")
  // })
  router.get('/profile',(req,res)=>{
    res.render("../createProfile")
  })

//   router.get('/contactUs',(req,res)=>{
//     res.render("contactUs")
//   })
    


module.exports = router;