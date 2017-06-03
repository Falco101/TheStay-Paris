function initMap() {
    var paris = {
        lat: 48.8566,
        lng: 2.3522
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: paris,
        disableDefaultUI: true,
        mapTypeId: 'hybrid'
    });

    var marker = new google.maps.Marker({
        position: paris,
        map: map
    });
}