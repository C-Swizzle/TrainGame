 $(document).ready(function() {
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBmZHozBbEbRUP9u50bIKezD6kJbMwjfPs",
    authDomain: "train-project-5c3e0.firebaseapp.com",
    databaseURL: "https://train-project-5c3e0.firebaseio.com",
    projectId: "train-project-5c3e0",
    storageBucket: "",
    messagingSenderId: "3391693467"
  };
  firebase.initializeApp(config);
  var database=firebase.database();
// var trainName="yoloswag";
// var trainDestination="hell";
// var trainFrequency="73";
// var trainArrival="12:00";
// var trainMinutes="12";

  function addTrain() {
    var $tr = $("<tr>");

    var $trainName = $("<td class='text-center'>");
    $trainName.text(trainName);
    $tr.append($trainName);

    var $trainDestination = $("<td class='text-center'>");
    $trainDestination.text(trainDestination);
    $tr.append($trainDestination);

    var $trainFrequency = $("<td class='text-center'>");
    $trainFrequency.text(trainFrequency);
    $tr.append($trainFrequency);

    var $trainArrival = $("<td class='text-center'>");
    $trainArrival.text(trainArrival);
    $tr.append($trainArrival);
   
    var $trainMinutes = $("<td class='text-center'>");
    $trainMinutes.text(trainMinutes);
    $tr.append($trainMinutes);

    $("#main-table").append($tr);


  }
  // addTrain();

  $("#submit").on("click", function(e) {
    e.preventDefault();
    var trainName = $("#train-name").val();
    var trainDestination = $("#destination").val();
    var trainFrequency = $("#frequency").val();
    var firstTrain = $("#first-train").val();




    $("#train-name").val("");
    $("#destination").val("");
    $("#frequency").val("");
    $("#first-train").val("");

    database.ref().push({
      name: trainName,
      destination: trainDestination,
      frequency: trainFrequency,
      first: firstTrain

    });


  });

  database.ref().on("child_added", function(snap) {

    console.log(snap.val());
    var now = moment().format("HH:mm");
    var firstTrain = snap.val().first;
    
    // firstTrain=moment(firstTrain, "HH:mm").format("LTS");
    var now = moment().format("HH:mm");
    var diff =  moment(firstTrain, "HH:mm").diff(moment(now, "HH:mm"), "minutes");
    // while (diff<0) {
    //   firstTrain = moment(firstTrain, "HH:mm").add(snap.val().frequency, "m");
    //   console.log(firstTrain);
    //   diff =  moment(firstTrain, "HH:mm").diff(moment(now, "HH:mm"), "minutes");
    // }
    while (diff<0) {
    var add = moment(firstTrain, "HH:mm").add(snap.val().frequency, "m").format("HH:mm");
    firstTrain=add;
    diff =  moment(firstTrain, "HH:mm").diff(moment(now, "HH:mm"), "minutes");
    
    }
    console.log(moment(firstTrain, "HH:mm").format("LT"));
    console.log(diff);
    })

  // console.log(moment().format("HH:mm"));
  var date = "1:00";
  // var now = moment().format("HH:mm");
  // // console.log(moment().format("HH:mm").diff(date, "seconds"));
  // console.log(moment().format("HH:mm"));
  // var diff = moment(now, "HH:mm").diff(moment(date, "HH:mm"), "minutes");
  // console.log(diff);
  var add = moment().format("HH:mm");
  add = moment(date, "HH:mm").add(10, "m").format("HH:mm");
  console.log(add);

});