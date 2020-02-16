<script>
  function calculateRoute(from, to) {//parameters from and to
    var directionsService = new google.maps.DirectionsService();
    var directionsRequest = {
      origin: from,
      destination: to,
      provideRouteAlternatives: true,
      travelMode: google.maps.DirectionsTravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC
    };
    directionsService.route(
     directionsRequest,
    function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            for (var i = 0, len = response.routes.length; i < len; i++) {
				var coords = response.routes[i].overview_path;
				var blacklist1 = new google.maps.LatLng(43.636720,-79.399674);//point location of blacklist intersections
				var blacklist2 = new google.maps.LatLng(43.664484,-79.458751);
				var blacklist3 = new google.maps.LatLng(43.698602,-79.436628);
				var blacklist4 = new google.maps.LatLng(43.656412,-79.452385);
				var blacklist5 = new google.maps.LatLng(43.653750,-79.451810);
				var blacklist6 = new google.maps.LatLng(43.682754,-79.420338);
				var blacklist7 = new google.maps.LatLng(43.637742,-79.391893);
				var blacklist8 = new google.maps.LatLng(43.640561,-79.436770);
				var blacklist9 = new google.maps.LatLng(43.771557,-79.364049);
				var blacklist10 = new google.maps.LatLng(43.771856,-79.321592);
				
				boolean danger = false;
				for (var j=0, j < (coords.length-3);j+=2){//increments of 2
					var apoly = new google.maps.Polyline({//creates a polygon for any three consecutive points on route
						path:[
							new google.maps.LatLng(x1,y1),//connect three points to form a poly
							new google.maps.LatLng(x2,y2),
							new google.maps.LatLng(x3,y3)
							]
					});
					apoly.setMap(map);//set poly on map
					
					if(google.maps.geometry.poly.isLocationOnEdge(blacklist,apoly,10e-1)){//if on edge
						danger = true;
					}
				}
				if(!danger){
					new google.maps.DirectionsRenderer({
                    map: mapObject,
                    directions: response,
                    routeIndex: i//check latrer
                });//display the route
				}
			}else {
            $("#error").append("Unable to retrieve your route<br />");
        }
    }
    );
  }
	var first = new google.maps.LatLng(43.771557,-79.364049);
    var second = new google.maps.LatLng(43.771856,-79.321592);
	var request = {
        origin: "1521 NW 54th St, Seattle, WA 98107 ",
        destination: "San Diego, CA",
        waypoints: [{location: first, stopover: false},
                    {location: second, stopover: false}],
                    optimizeWaypoints: true,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
					};
  });
   <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">//change YOUR_API_KEY
</script>