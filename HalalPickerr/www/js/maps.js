var aantal_km;

// functie die de map zal initialiseren en markers met de nodige informatie opzetten.
function initMap() {
  navigator.geolocation.getCurrentPosition(function (position) {
    var currentpos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    const Snack_Tetiko = {
      lat: 50.85448866605904,
      lng: 4.356875043128931,
    };

    const Royal_Family_Pizza = {
      lat: 50.85767641494566,
      lng: 4.320589540705747,
    };

    var map = new google.maps.Map(document.getElementById("map"), {
      center: currentpos,
      zoom: 14,
    });

    // Calculate and display the distance between markers
    var distance_currentpos_Snack_Tetiko = distance(
      currentpos.lat,
      currentpos.lng,
      Snack_Tetiko.lat,
      Snack_Tetiko.lng,
      "K"
    );

    // Calculate and display the distance between markers
    var distance_currentpos_Royal_Family_Pizza = distance(
      currentpos.lat,
      currentpos.lng,
      Royal_Family_Pizza.lat,
      Royal_Family_Pizza.lng,
      "K"
    );

    var aantal_km_Snack_Tetiko =
      distance_currentpos_Snack_Tetiko.toFixed(2) + " km";

    var aantal_km_Royal_Family_Pizza =
      distance_currentpos_Royal_Family_Pizza.toFixed(2) + " km";

    var icon = {
      // url: "./img/7739394_moslem_fasting_islam_halal_ramadan_icon.png", // url
      url: "https://cdn-icons-png.flaticon.com/512/2764/2764436.png", // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0), // anchor
    };

    var iconUser = {
      url: "https://icon-library.com/images/location-marker-icon/location-marker-icon-15.jpg", // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0), // anchor
    };

    // Draw a line showing the straight distance between the markers
    var markers = [
      {
        content: "<h1> I found you!</h1>",
        coords: currentpos,
        animation: google.maps.Animation.BOUNCE,
      },
      {
        content: `<h1> Snack Tetiko ${aantal_km_Snack_Tetiko}</h1>`,
        coords: { lat: 50.85448866605904, lng: 4.356875043128931 },
        iconImage: icon,
        animation: google.maps.Animation.DROP,
      },
      {
        content: `<h1>  Royal Family Pizza ${aantal_km_Royal_Family_Pizza}</h1>`,
        coords: { lat: 50.85767641494566, lng: 4.320589540705747 },
        iconImage: icon,
        animation: google.maps.Animation.DROP,
      },
    ];

    // var line1 = new google.maps.Polyline({
    //   path: [currentpos, Snack_Tetiko],
    //   map: map,
    // });

    // var line2 = new google.maps.Polyline({
    //   path: [currentpos, Royal_Family_Pizza],
    //   map: map,
    // });

    for (let i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
    }

    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        title: "marker with infoWindow",
      });

      // Check for customicon
      if (props.iconImage) {
        // Set icon image
        marker.setIcon(props.iconImage);
      }

      if (props.content) {
        var infoWindow = new google.maps.InfoWindow({
          content: props.content,
        });

        marker.addListener("click", function () {
          infoWindow.open(map, marker);
        });
      }
    }

    aantal_km = [aantal_km_Snack_Tetiko, aantal_km_Royal_Family_Pizza];
  });
}

// Functie die ervoor zorgt dat de afstand tussen twee liggingen wordt berekend
// met als parameters de latitude en longitude van de twee liggingen en de eenheid waarin men deze wilt tonen
function distance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = (Math.PI * lat1) / 180;
  var radlat2 = (Math.PI * lat2) / 180;
  var radlon1 = (Math.PI * lon1) / 180;
  var radlon2 = (Math.PI * lon2) / 180;
  var theta = lon1 - lon2;
  var radtheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit == "K") {
    dist = dist * 1.609344;
  }
  if (unit == "N") {
    dist = dist * 0.8684;
  }
  return dist;
}

// Functie die gaat kijken als geolocation mogelijk is
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
}
