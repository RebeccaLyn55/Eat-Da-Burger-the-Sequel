var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var db = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burgers.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});


router.post("/", function(req, res) {
  db.burgers.create({
    burger_name: req.body.burger

    }).then(function() {
        res.redirect("/");

    });
});


/*
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    burger_name: req.body.burger_name
  }, condition, function() {
    res.redirect("/");
  });
});
*/


router.delete("/:id", function(req, res) {
    db.burgers.update(
    {devoured: true},
    {where: {id: req.body.id}}
  ).then(function() {

      res.redirect("/");
     
    });
});

// Export routes for server.js to use.
module.exports = router;