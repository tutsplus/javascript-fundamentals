(function () {
    'use strict';

    function onPositionReceived(position) {
        console.log(position); // Geoposition
    }

    function onPositionFailed(positionError) {
        console.log(positionError); // PositionError
    }

    function onPositionChanged(position) {
        console.log('New position is: ' + position.coords.latitude + ', ' + position.coords.longitude); // e.g. New position is: 50.90970000000001, -1.404351
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPositionReceived, onPositionFailed, {
            timeout: 0
        });

        var watch = navigator.geolocation.watchPosition(onPositionChanged, onPositionFailed);

        navigator.geolocation.clearWatch(watch);
    }
}());