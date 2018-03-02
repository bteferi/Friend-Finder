// all my api get and post happenes here


// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


module.exports = function(app) {



  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });





}
