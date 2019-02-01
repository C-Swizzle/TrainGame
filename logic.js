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
var trainName="yoloswag";
var trainDestination="hell";
var trainFrequency="73";
var trainArrival="12:00";
var trainMinutes="12";
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

    var $trainMinutes = $("<td class='text-center'>");
    $trainMinutes.text(trainMinutes);
    $tr.append($trainMinutes);

    var $trainArrival = $("<td class='text-center'>");
    $trainArrival.text(trainArrival);
    $tr.append($trainArrival);
    $("#main-table").append($tr);

  }
  addTrain();
});