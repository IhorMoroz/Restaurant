var map,
    marker,
    position = {
        lat: 48.312386,
        lng: 31.526764
    },
    mapOption = {
        center : position,
        zoom : 10,
        scrollwheel: false
    },
    markerOption = {
        position: position,
        map: map,
        title: 'Good Food',
        icon: "../img/app/decoration/goodfood.png"
    };

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), mapOption);
    marker = new google.maps.Marker(markerOption);
    marker.setMap(map);
}

$(document).ready(function(){
    var NO_VALID_VALUE = "This field must be a positive number greater than zero";

    function message(str){
        alert(str);
    }

    function writeLocalPrice(obj, countDish, priceForOne){
        var res = countDish * priceForOne;
        $(obj).parent('td').next().children("span").text(res.toFixed(2));
    }

    function writeTotalPrice(){
        var totalSum = 0, dishPrices = $(".OrPrice");
        for(var i = 0;i < dishPrices.length;i++){
            totalSum += Number($(dishPrices[i]).text());
        }
        $(".OrPriceTotal").children("span").text(totalSum.toFixed(2));
    }

    writeTotalPrice();
    $(".countDish").on('blur', function(){
        if(isNaN(this.value) || this.value < 1){
            $(this).addClass('error');
            message(NO_VALID_VALUE);
            return false;
        }
        writeLocalPrice(this, this.value, $(this).attr("data-dish-price"));
        writeTotalPrice();
    });

    $(".countDish").on('focus', function(){
        $(this).removeClass('error');
    });
});
