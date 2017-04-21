// JavaScript File


$(document).ready(function(){
        $('#search').click(function(){
            var search_adress = $('#zip_code').val();
            var search_food = $('#type_food').val();
            var api_url_1 = 'https://api.foursquare.com/v2/venues/search?v=20161016&near='
            var api_url_2 = '&query='
            var api_url_3 = '&intent=checkin&client_id=LAICFUR5GWDY5MBLEFZCEMXEEYTR0KDQU4MKJVWWU33VSITA&client_secret=RWLSS5MCT3DWVRKKOGOU1ZNBIA4EJGG5TE1NBVHSJWJCPH5Q'
            var complete_url = api_url_1 + search_adress + api_url_2 + search_food + api_url_3;
            $.getJSON(complete_url, function(response) {
                console.log(response);
             var restaurant_name = response.response.venues[0].name;
             $('#appended_results').append('<li>' + 'You can go to ' + restaurant_name + "</li>")
            })
            
        })
    })




// Food Page Get Results and Append

//$(document).ready(function() {
//    $('#search').click(function() {
//        $("#added_info").empty();
//        var search_adress = $('#adress').val();
 //       var search_food = $('#food_type').val();
//        var api_url_1 = 'https://api.foursquare.com/v2/venues/search?v=20161016&near='
//        var api_url_2 = '&query='
//        var api_url_3 = '&intent=checkin&client_id=LAICFUR5GWDY5MBLEFZCEMXEEYTR0KDQU4MKJVWWU33VSITA&client_secret=RWLSS5MCT3DWVRKKOGOU1ZNBIA4EJGG5TE1NBVHSJWJCPH5Q'
//        var complete_url = api_url_1 + search_adress + api_url_2 + search_food + api_url_3
//        $.getJSON(complete_url, function(response) {
//            console.log(response)
            //var restaurant_name = response.response.venues[0].name;
            //var restaurant_phone = response.response.venues[0].contact.phone;
            //var restaurant_adress = response.response.venues[0].location.address;
            //$('#added_info').append('<li>' + 'You can go to ' + restaurant_name + "</li>")
            //$('#added_info').append('<li>' + 'You can call them at ' + restaurant_phone + "</li>")
            //$('#added_info').append('<li>' + 'There address is  ' + restaurant_adress + "</li>")
 //           for (var i = 1; i <= 9; i++) {
 //               var restaurant_name = response.response.venues[i].name;
 //               var restaurant_phone = response.response.venues[i].contact.formattedPhone;
 //               var restaurant_adress = response.response.venues[i].location.address;
 //               // $('#added_info').append('<li>' + 'You can go to ' + restaurant_name + "." + " " + 'You can call them at ' + restaurant_phone + "." + " " + 'There address is  ' + restaurant_adress + "." + '</li>');
 //               $('#added_info').append('<div class="col-xs-3 card" style="background-color:lavender;">' + '<p>' + restaurant_name + '</p>' + '<p>' + restaurant_adress + '</p>' + '<p>' + restaurant_phone + '</p>');
 //           };
 //       });
//
 //   });
//});