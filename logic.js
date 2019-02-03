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
    
   
   
 
   


  }
  // addTrain();

  $("#submit").on("click", function(e) {
    e.preventDefault();
    var trainName = $("#train-name").val();
    var trainDestination = $("#destination").val();
    var trainFrequency = Number($("#frequency").val());
    var firstTrain = $("#first-train").val();
    console.log(moment(firstTrain, "HH:mm").format("HH:mm"));
    console.log(firstTrain);
    
    if (moment(firstTrain, "HH:mm").format("HH:mm") && trainFrequency<1440) {


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
  } else{
    alert("Incorrect Format!");
  }


  });

  database.ref().on("child_added", function(snap) {
    var count = 0;
    console.log(snap.val());
    var now = moment().format("HH:mm");
    var firstTrain = snap.val().first;
    var deleteID = snap.key;
    console.log(snap.key);
    // firstTrain=moment(firstTrain, "HH:mm").format("LTS");
    var now = moment().format("HH:mm");
    var diff =  moment(firstTrain, "HH:mm").diff(moment(now, "HH:mm"), "minutes");
    // while (diff<0) {
    //   firstTrain = moment(firstTrain, "HH:mm").add(snap.val().frequency, "m");
    //   console.log(firstTrain);
    //   diff =  moment(firstTrain, "HH:mm").diff(moment(now, "HH:mm"), "minutes");
    // }
    
    while (diff<0) {
      count++;
      if (count>1440) {
        diff2 = "No more trains today!";
      } else {
    var add = moment(firstTrain, "HH:mm").add(snap.val().frequency, "m").format("HH:mm");
    firstTrain=add;
    diff =  moment(firstTrain, "HH:mm").diff(moment(now, "HH:mm"), "minutes");
    diff2=diff;
      }
    }
    var next = moment(firstTrain, "HH:mm").format("LT");
    console.log(diff);
    var $tr = $("<tr>");
    $tr.attr("id", snap.key);


    var $trainName = $("<td class='text-center'>");
    $trainName.attr("data-id", snap.key);
    var $but=$("<button class='btn btn-danger delete-button-not-boot'>Delete</button>")
    $but.attr("data-id", snap.key);
    $tr.append($but);
    $trainName.text(snap.val().name)
    $tr.append($trainName);

    var $trainDestination = $("<td class='text-center'>");
    $trainDestination.text(snap.val().destination);
    $trainDestination.attr("data-id", snap.key);
    $tr.append($trainDestination);

   
  
    var $trainFrequency = $("<td class='text-center'>");
    $trainFrequency.attr("data-id", snap.key);
    $trainFrequency.text(snap.val().frequency);
    $tr.append($trainFrequency);

    var $trainArrival = $("<td class='text-center'>");
    $trainArrival.attr("data-id", snap.key);
    $trainArrival.text(next);
    $tr.append($trainArrival);

    var $trainMinutes = $("<td class='text-center'>");
    $trainMinutes.attr("data-id", snap.key);
    $trainMinutes.text(diff2);
    $tr.append($trainMinutes);

    $("#main-table").append($tr);

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
$(document).on('click', ".delete-button-not-boot", function(e)  {
  e.preventDefault();
var idDelete = $(this).attr("data-id");
database.ref(idDelete).remove();
idDeleteReal = "#" + idDelete;
$(idDeleteReal).css("display", "none");
});


});