    $(document).ready(function(){

var search = $("#search").val().trim();
var numRecords = $("#numRecords").val();
var startYear = $("startYear").val();
var endYear = $("#endYear").val();  
    
    // This is our API key. Add your own API key between the ""
    var APIKey = "wdC2mcsgCZbxKVDBM8v7mr5cwP2Bw9Xx";

    // Here we are building the URL we need to query the database
    var queryURL = "http://api.nytimes.com/svc/archive/v1/2016/11.json?api-key=" + APIKey;
    console.log(queryURL);

    //Create the AJAX call 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);
      });

    });