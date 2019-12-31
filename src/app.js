const express = require("express");
const app = express();
app.route('/')
  .get((req, res) => {
    console.log("Accessing home page")
    res.send('Welcome');
  })
  .post((req, res) => {
    res.send('Add a user');
  })
  .put((req, res) => {
    res.send('Update the user details');
  })
  .all((req, res) => {   
    res.json({"message":"For all matching / request"});
})
console.log("Server Started at port 3000!");
app.listen(3000); 






