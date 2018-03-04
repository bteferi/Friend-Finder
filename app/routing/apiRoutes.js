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

    for (var i = 0; i < friendsData.length; i++) {

      var availableFriendsScores =friendsData[i].scores
          console.log(availableFriendsScores)
          for (var j=0 ; j < availableFriendsScores.length; j++){

                console.log(newFriend.score)
                 // var newFriendScore = newFriend.scores[j]
                // // console.log(newFriendScore)
          }


      // compare availableFriends to newFriend

    }




    // for (var j = 0; j < newFriend.score.length; j++) {
    //   var surveryAnsers = newFriend.score
    //   // console.log(" NEW FRIENDS  " + surveryAnsers);
    //
    // }





    friendsData.push(newFriend);

    res.json(newFriend)

  });



} // module export ends here
