// JavaScript File
$(document).ready(function() {

    $('#go_get_results').click(function() {
        $("#appended_results").empty();
        var location = $('#location_line').val();
        var bedroom = $('#bedrooms_line').val();
        var bathroom = $('#bathrooms_line').val();
        var rent = $('#rent_line').val();

        //apt json
        $.getJSON("apt.json", function(looking) {
            console.log(looking);
            var filter = looking.filter(function(apartment) {
                if ((apartment.location == location) && (apartment.number_of_bedrooms == bedroom ) && (apartment.number_of_bathrooms == bathroom) && (apartment.rent <= rent)){
                return true;
                }
                else{
                return false; 
                }
            })
            for (var i = 1; i <= 9; i++) {
                var location = filter[i].location;
                var bedroom = filter[i].bedroom;
                var bathroom = filter[i].bathroom;
                var rent = filter[i].rent;
                $('#results').append('<li>' + location + '</li>' + '<br>' + '<li>' + bathroom + '</li>' + '<br>');
            }
           
            console.log(filter);
            
        });


    });




    $('#search').click(function() {
        $("#appended_results").empty();
        $("#appended_giphy_results").empty();
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
        //console.log(giphy_url);


        //Fouresquare API Code
        $.getJSON(complete_url, function(response) {
            //console.log(response);
            for (var i = 1; i <= 9; i++) {
                var restaurant_name = response.response.venues[i].name;
                var restaurant_phone = response.response.venues[i].contact.formattedPhone;
                var restaurant_adress = response.response.venues[i].location.formattedAddress[0];
                var restaurant_url = response.response.venues[i].url;
                $('#appended_results').append('<div class="col-xs-3 card" style="background-color:lavender;">' + '<p>' + restaurant_name + '</p>' + '<p>' + restaurant_adress + '</p>' + '<p>' + restaurant_phone + '</p>' + '<a href="' + restaurant_url + '"> Go to their website!</a>');
            }
        });


        //Giphy API Code 
        $.getJSON(giphy_url, function(calling) {
            console.log(calling);
            for (var t = 0; t <= 2; t++) {
                var x = Math.floor((Math.random() * 10) + 1);
                var imgUrl = calling.data[x].images.downsized.url;
                var img = "<img style='height:164px;width:230px;padding:10px;margin:5px;' src= '" + imgUrl + "' />";
                $('#appended_giphy_results').append('<div class="col-xs-3">' + img + '</div>')
            };

        });


    });




});