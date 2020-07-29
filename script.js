    $(document).ready(function(){
    $("#submit").click(function(event){
        event.preventDefault();
    var search = $("#search").val().trim();
    console.log(search)
    var numRecords = $("#numRecords").val();
    var startYear = $("startYear").val();
    var endYear = $("#endYear").val();  
    
    // This is our API key. Add your own API key between the ""
    var APIKey = "wdC2mcsgCZbxKVDBM8v7mr5cwP2Bw9Xx";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&api-key=" + APIKey;
    console.log(queryURL);

    //Create the AJAX call 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);
      });
    })

    
    });

    // "&facet_fields=source&facet=true&begin_date="+startYear+"0101&end_date="+endYear+"1231