(function () {
    'use strict';

    var now = new Date();
    console.log(now); // e.g, Mon Oct 13 2014 21:39:05 GMT+0100 (GMT Summer Time)
    console.log(typeof Date()); // string

    var partyTime = new Date(946684799000);
    console.log(partyTime); // Fri Dec 31 1999 23:59:59 GMT+0000 (GMT Standard Time)

    var dob = new Date('september 9 1978');
    console.log(dob); // Sat Sep 09 1978 00:00:00 GMT+0100 (GMT Summer Time)

    var notADate = new Date('whoops');
    console.log(notADate); // Invalid Date

    var specialDate = new Date(2002, 2, 9);
    console.log(specialDate); // Sat Mar 09 2002 00:00:00 GMT+0000 (GMT Standard Time)

    console.log(specialDate.getDate()); // 9
    console.log(specialDate.getMonth()); // 2
    console.log(specialDate.getFullYear()); // 2002

    console.log(specialDate.getUTCDate()); // 9
    console.log(specialDate.getUTCMonth()); // 2
    console.log(specialDate.getUTCFullYear()); // 2002

    console.log(specialDate.getDay()); // 6
    console.log(specialDate.getUTCDay()); // 6

    console.log(specialDate.toString()); // Sat Mar 09 2002 00:00:00 GMT+0000 (GMT Standard Time)
    console.log(specialDate.toUTCString()); // Sat, 09 Mar 2002 00:00:00 GMT
    console.log(specialDate.toDateString()); // Sat Mar 09 2002
    console.log(specialDate.toTimeString()); // 00:00:00 GMT+0000 (GMT Standard Time)
    console.log(specialDate.toISOString()); // 2002-03-09T00:00:00.000Z
    console.log(specialDate.toLocaleString()); // 3/9/2002 12:00:00 AM
}());