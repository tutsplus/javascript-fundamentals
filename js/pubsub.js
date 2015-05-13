(function () {
    'use strict';

    var pubsub = (function pubsub() {
        var subscribers = {};

        function EventObject() { }
        EventObject.prototype = {};
        EventObject.prototype.constructor = EventObject;

        function subscribe(event, callback) {
            if (!subscribers[event]) {
                var subscriberArray = [callback];
                subscribers[event] = subscriberArray;
            } else {
                subscribers[event].push(callback);
            }
        }

        function publish(event, data) {
            var eventObject = new EventObject();
            eventObject.type = event;
            if (data) {
                eventObject.data = data;
            }
            if (subscribers[event]) {
                subscribers[event].forEach(function (callback) {
                    callback(eventObject);
                });
            }
        }

        return {
            pub: publish,
            sub: subscribe
        };
    }());

    pubsub.sub('somecustomevent', function (e) {
        console.log('somecustomevent was triggered! ', e.data.customData);
    });

    pubsub.pub('somecustomevent', {
        customData: 'customData!'
    });
}());
