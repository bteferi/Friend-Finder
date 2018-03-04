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
    var bestMatch = {};
      // console.log(newFriend.score)
    for(var i = 0; i <newFriend.score.length; i++) {
      if(newFriend.score[i] == "1") {
        newFriend.score[i] = 1;
      } else if(newFriend.score[i] == "5") {
        newFriend.score[i] = 5;
      } else {
        newFriend.score[i] = parseInt(newFriend.score[i]);
      }
    }
    // compare the scores of newFriend with the scores of each friend in the database and find the friend with the smallest difference when each set of scores is compared

    var bestMatchIndex = 0;
    //greatest score difference for a question is 4, therefore greatest difference is 4 times # of questions in survey
    var bestMatchDifference = 40;

    for(var i = 0; i < friendsData.length; i++) {
      var totalDifference = 0;

      for(var index = 0; index < friendsData[i].scores.length; index++) {
        var differenceOneScore = Math.abs(friendsData[i].scores[index] - newFriend.score[index]);
        totalDifference += differenceOneScore;
      }

      // if the totalDifference in scores is less than the best match so far
      // save that index and difference
      if (totalDifference < bestMatchDifference) {
        bestMatchIndex = i;
        bestMatchDifference = totalDifference;
      }
    }

    // the best match index is used to get the best match data from the friends index
    bestMatch = friendsData[bestMatchIndex];

    // Put new friend from survey in "database" array
    friendsData.push(newFriend);
    res.json(bestMatch)
    
  });



} // module export ends here
