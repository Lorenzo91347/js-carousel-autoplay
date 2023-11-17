'use strict'

//Array creation and images container/buttons fetching,currentItem set

const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentItem = 0;

/*Creation of images and respective containers in Html using a counter,
selection of all .item elements under one variable */

for (let i = 0; i < images.length; i++) {
    const item = document.createElement('div');
    item.classList.add('item');

    if (i === currentItem) {
        item.classList.add('active');
    }

    const img = document.createElement('img');
    img.src = `img/${images[i]}`;

    item.append(img);
    items.append(item);

}

const pageItems = document.querySelectorAll('.item');

/*eventListeners to switch the .active class progressively up
or down on the .item class divs,depending on the button element pressed */


prev.addEventListener('click', function () {
    if (currentItem > 0) {
        pageItems[currentItem].classList.remove('active');
        currentItem--;
        pageItems[currentItem].classList.add('active');
    }
});
next.addEventListener('click', function () {
    if (currentItem < pageItems.length - 1) {
        pageItems[currentItem].classList.remove('active');
        currentItem++;
        pageItems[currentItem].classList.add('active');

    }
});

function test() {
    if (currentItem < pageItems.length - 1) {
        pageItems[currentItem].classList.remove('active');
        currentItem++;
        pageItems[currentItem].classList.add('active');
        timesRemaining--;
        console.log('Image switched!')
    }
};

function test2() {
    if (currentItem > 0) {
        pageItems[currentItem].classList.remove('active');
        currentItem--;
        pageItems[currentItem].classList.add('active');
        console.log('now its going back!')
    }
}
let timesRemaining = 0

setInterval(test2, 3000);

do {
    test();
    timesRemaining++;
} while (timesRemaining < 5);




