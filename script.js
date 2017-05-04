// JavaScript File
$(document).ready(function() {
    $('#search').click(function() {
        $("#appended_results").empty();
        //foursquare defining values
        var search_adress = $('#zip_code').val();
        var search_food = $('#type_food').val();
        var api_url_1 = 'https://api.foursquare.com/v2/venues/search?v=20161016&near='
        var api_url_2 = '&query='
        var api_url_3 = '&intent=checkin&client_id=LAICFUR5GWDY5MBLEFZCEMXEEYTR0KDQU4MKJVWWU33VSITA&client_secret=RWLSS5MCT3DWVRKKOGOU1ZNBIA4EJGG5TE1NBVHSJWJCPH5Q'
        var complete_url = api_url_1 + search_adress + api_url_2 + search_food + api_url_3;
        //giphy defineing values
        var giphy_search_val = $("#type_food").val();
        var part1 = "https://api.giphy.com/v1/gifs/search?q=";
        var part2 = "&api_key=dc6zaTOxFJmzC"
        var giphy_url = part1 + giphy_search_val + part2;
    
        
        
        $.getJSON(complete_url, function(response) {
            console.log(response);
            for (var i = 1; i <= 9; i++) {
                 var restaurant_name = response.response.venues[i].name;
                var restaurant_phone = response.response.venues[i].contact.formattedPhone;
                var restaurant_adress = response.response.venues[i].location.formattedAddress[0];
                var restaurant_url = response.response.venues[i].url;
                 $('#appended_results').append('<div class="col-xs-3 card" style="background-color:lavender;">' + '<p>' + restaurant_name + '</p>' + '<p>' + restaurant_adress + '</p>' + '<p>' + restaurant_phone + '</p>' + '<a href="' + restaurant_url+ '"> Go to their website!</a>');
            }
         });
         
        // $.getJSON(giphy_url), function(calling){
          //   console.log(calling)
        // }
         
         

    });
});


// for (var x = 1; i <= 3; i++){
 //               var imgUrl = response.data[0].images.downsized.url;
//                var img = "<img src= '" + imgUrl + "' />";
 //               $("#appended_giphy").append('<div class="col-xs-3 card">' + img + '</div>');
 //           }