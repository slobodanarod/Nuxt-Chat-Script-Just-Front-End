var admin = require("firebase-admin");

// Get a database reference to our posts
var db = admin.database();
var ref = db.ref("messages/1");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log("geldi");
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
