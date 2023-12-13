// import express routes
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status : "Api Its Working",
        message : "Welcome To Resthub BackEnd APP"
    }
    );
});
  
router.post("/", (req, res) => {
    res.send("Request create masuk");
});
  
router.put("/", (req, res) => {
    res.send("Request update masuk");
});
  
router.delete("/", (req, res) => {
    res.send("Request delete masuk");
});


module.exports = router;