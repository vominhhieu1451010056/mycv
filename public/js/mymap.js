function myMap() {
    var myLatlng = new google.maps.LatLng(10.784063, 106.685920);

        var styles = [
            {
                featureType: "landscape",
                stylers: [
                    { color: '#f7f7f7' }
                ]
            },{
                featureType: "natural",
                stylers: [
                    { hue: '#00ffe6' }
                ]
            },{
                featureType: "road",
                stylers: [
                    { hue: '#fff' },
                    { saturation: -70 }
                ]
            },{
                featureType: "building",
                elementType: "labels",
                stylers: [
                    { hue: '' }
                ]
            },{
                featureType: "poi", //points of interest
                stylers: [
                    { hue: '' }
                ]
            }
        ];
        
        var mapOptions = {
            zoom: 15,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            styles: styles
        }
        var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
        });

        marker.setMap(map);

        var contentString = '' +
                '' +
                '';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });

}
