// Setup click event
controlUI.addEventListener("click", function () {
    console.log(pointA_input.value);
    pointA_corrected = pointA_input.value.replace(/ /g, "%20");
    console.log(pointA_corrected);

    console.log(pointB_input.value);
    pointB_corrected = pointB_input.value.replace(/ /g, "%20");
    console.log(pointB_corrected);
    url_A = "https://maps.googleapis.com/maps/api/geocode/json?address="
        + pointA_corrected + "&key=AIzaSyDUgE1CKLtTK6QXOJoo3BnsFdje_uFJYXo";
    url_B = "https://maps.googleapis.com/maps/api/geocode/json?address="
        + pointB_corrected + "&key=AIzaSyDUgE1CKLtTK6QXOJoo3BnsFdje_uFJYXo";

    console.log(url_A);
    console.log(url_B);
    request_A(url_A, );
    request_B(url_B);
});
        

function request_A(address, callback) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        address,
    }, function (results, status) {
        if (status === 'OK') {
            var pointA = {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng(),
            }
            console.log(pointA);
            callback();
        } else {
            alert('Cannot find address');
        }
    });
}

function request_B(address, callback) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        address,
    }, function (results, status) {
        if (status === 'OK') {
            var pointB = {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng(),
            }
            console.log(pointB);
            callback();
        } else {
            alert('Cannot find address');
        }
    });
}
