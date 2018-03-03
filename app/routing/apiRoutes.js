// all my api get and post happenes here


// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


module.exports = function(app) {



  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });



  // POST ROUTE WILL HANDLE ALL INCOMING INFO

  // This route will also be used to handle the compatibility logic.

  app.post("/api/friends", function(req, res) {


      var newFriend = req.body;
      // what goes in to the body

      console.log(newFriend)

      for (var i = 0; i < friendsData.length; i++) {
        // console.log(friendsData[i].scores)

        // for (var j = 0; j < friendsData[i].scores[j]; j++) {
        //    // console.log("friendsData[i].scores[j]",friendsData[i].scores[j]);
        //       // here is the array that holds the new incoming data score array

        for (var j = 0; j < newFriend.score.length; j++) {
          console.log(newFriend.score)

        }


      }

    // here is the data being sent from the user as a request - this will show on console Prompt
    // here goes the info saved from the survey page and we use post to add it here

    // theTotalScore = adding the array scores;

    // if (totalscore <= bestMath.friends) {
    //   bestMathc.Name = array of DataCue

    // }

    // now I post the users data to my api - data for all my possible friends

    friendsData.push(newFriend);

    res.json(newFriend)

  });



} // module export ends here
