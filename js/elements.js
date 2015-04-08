(function () {
    'use strict';

    console.log(document.getElementById('mainHeading')); // <h1 class...
    console.log(document.getElementsByClassName('heading')); // [h1#mainHeading.heading, ...
    console.log(document.getElementsByTagName('header')); // [header, ...

    var mainHeading = document.getElementById('mainHeading');
    var subHeading = document.getElementsByClassName('heading')[1];

    console.log(mainHeading.id); // mainHeading
    console.log(subHeading.id); // 

    mainHeading.id = 'firstHeading';
    console.log(mainHeading.id); // firstHeading
    console.log(document.getElementById('firstHeading')); // <h1 class...

    console.log(subHeading.className); // heading subHeading
    subHeading.classList.add('special');
    subHeading.classList.remove('special');
    console.log(subHeading.classList.contains('special')); // false

    console.log(mainHeading.tagName); // H1
    console.log(mainHeading.nodeType); // 1
    console.log(mainHeading.childNodes[0].nodeType); // 3
    mainHeading.innerHTML = '<span>' + mainHeading.innerHTML + '</span>';
    mainHeading.outerHTML = '<p>' + mainHeading.innerHTML + '</p>';

    subHeading.textContent = 'I love Envato!';

    subHeading.setAttribute('contenteditable', true);
    subHeading.removeAttribute('contenteditable');
    console.log(subHeading.hasAttribute('contenteditable')); // false

    var heading = document.getElementsByTagName('header')[0];
    console.log(heading.childNodes.length); // 5

    var x, length;
    for (x = 0, length = heading.childNodes.length; x < length; x += 1) {
        if (heading.childNodes[x].nodeType === 1) {
            console.log('I am a ' + heading.childNodes[x].tagName); // I am a P...
        }
    }

    console.log(heading.children.length); // 2

    console.log(heading.childNodes[0].nodeName); // #text
    console.log(heading.children[0].nodeName); // P
    console.log(heading.firstChild.nodeName); // #text

    console.log(subHeading.parentNode.nodeName); // HEADER

    console.log(heading.firstChild.nextSibling.nodeName); // P
    console.log(heading.lastChild.previousSibling.nodeName); // H

    document.body.appendChild(subHeading);
    document.body.insertBefore(subHeading, heading);
    document.body.removeChild(heading);
    if (document.body.contains(heading)) {
        document.body.removeChild(heading);
    }

    var substitute = document.createElement('i');
    substitute.textContent = 'I have been swapped in';
    document.body.replaceChild(substitute, subHeading);
}());