// JavaScript File


$(document).ready(function(){
        $('#search').click(function(){
            var search_adress = $('#zip_code').val();
            var search_food = $('#type_food').val();
            console.log(search_food);
        })
    })




// Food Page Get Results and Append

//$(document).ready(function() {
//    $('#search').click(function() {
//        //$("#added_info").empty();
//        var search_adress = $('#zip_code').val();
//        var search_food = $('#type_food').val();
//        var api_url_1 = 'https://api.foursquare.com/v2/venues/search?v=20161016&near='
//        var api_url_2 = '&query='
//        var api_url_3 = '&intent=checkin&client_id=LAICFUR5GWDY5MBLEFZCEMXEEYTR0KDQU4MKJVWWU33VSITA&client_secret=RWLSS5MCT3DWVRKKOGOU1ZNBIA4EJGG5TE1NBVHSJWJCPH5Q'
//        var complete_url = api_url_1 + search_adress + api_url_2 + search_food + api_url_3
//        alert(search_adress)
//        //$.getJSON(complete_url, function(response) {
            //console.log(response)
//        }
        
 //   }
    
//}
    