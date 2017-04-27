// JavaScript File
$(document).ready(function() {
    $('#search').click(function() {
        $("#appended_results").empty();
        var search_adress = $('#zip_code').val();
        var search_food = $('#type_food').val();
        var api_url_1 = 'https://api.foursquare.com/v2/venues/search?v=20161016&near='
        var api_url_2 = '&query='
        var api_url_3 = '&intent=checkin&client_id=LAICFUR5GWDY5MBLEFZCEMXEEYTR0KDQU4MKJVWWU33VSITA&client_secret=RWLSS5MCT3DWVRKKOGOU1ZNBIA4EJGG5TE1NBVHSJWJCPH5Q'
        var complete_url = api_url_1 + search_adress + api_url_2 + search_food + api_url_3;
        $.getJSON(complete_url, function(response) {
            console.log(response);
            for (var i = 1; i <= 9; i++) {
                var restaurant_name = response.response.venues[i].name;
                var restaurant_phone = response.response.venues[i].contact.formattedPhone;
                var restaurant_adress = response.response.venues[i].location.address;
                var restaurant_url = response.response.venues[i].url;
                $('#appended_results').append('<div class="col-xs-3 card" style="background-color:lavender;">' + '<p>' + restaurant_name + '</p>' + '<p>' + restaurant_adress + '</p>' + '<p>' + restaurant_phone + '</p>' + '<a href="' + restaurant_url+ '"> Go to their website!</a>');

            }

        })

    })
})

