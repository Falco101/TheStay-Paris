$document.ready(function() {
    function initMap() {
        var paris = {
            lat: 48.8566,
            lng: 2.3522
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: paris,
            disableDefaultUI: true,
            mapTypeId: 'hybrid'
        });

        var markerImg = '/test-front-end-developer/pin.png'
        var markerImgHov = '/test-front-end-developer/pin-hover.png'

        marker1 = new google.maps.Marker({
            position: {
                lat: 48.857475,
                lng: 2.336157
            },
            icon: markerImg,
            map: map
        });
        marker2 = new google.maps.Marker({
            position: {
                lat: 48.848446,
                lng: 2.350834
            },
            icon: markerImg,
            map: map
        });
        marker3 = new google.maps.Marker({
            position: {
                lat: 48.869456,
                lng: 2.367142
            },
            icon: markerImg,
            map: map
        });

        google.maps.event.addListener(marker1, 'mouseover', function() {
            marker1.setIcon(markerImgHov);
        });

        google.maps.event.addListener(marker1, 'mouseout', function() {
            marker1.setIcon(markerImg);
        });

        google.maps.event.addListener(marker1, 'click', function() {
            ShowBlade('#blade1');
        });

        google.maps.event.addListener(marker2, 'mouseover', function() {
            marker2.setIcon(markerImgHov);
        });

        google.maps.event.addListener(marker2, 'mouseout', function() {
            marker2.setIcon(markerImg);
        });

        google.maps.event.addListener(marker2, 'click', function() {
            ShowBlade('#blade2');
        });

        google.maps.event.addListener(marker3, 'mouseover', function() {
            marker3.setIcon(markerImgHov);
        });

        google.maps.event.addListener(marker3, 'mouseout', function() {
            marker3.setIcon(markerImg);
        });

        google.maps.event.addListener(marker3, 'click', function() {
            ShowBlade('#blade3');
        });

        google.maps.event.addListener(map, 'click', CloseBlade);
    }


    var openBlade;

    function ShowBlade(blade) {
        var timeout = 0;
        if (openBlade !== null) {
            CloseBlade();
            timeout = 300;
        }
        openBlade = blade;
        setTimeout(function() {
            $(blade).addClass('show-blade');
        }, timeout);
    }

    $('.close').click(CloseBlade);

    function CloseBlade() {
        if (openBlade !== null) {
            $(openBlade).removeClass('show-blade');
        }
        openBlade = null;
    }
});