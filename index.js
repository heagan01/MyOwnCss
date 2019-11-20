var item0 = document.getElementById('item1');
var item1 = document.getElementById('item2');
var item2 = document.getElementById('item3');
var item3 = document.getElementById('item4');

function item1a() {
    item0.classList.add('active');
    item1.classList.remove('active');
    item2.classList.remove('active');
    item3.classList.remove('active');
}

function item2a() {
    item0.classList.remove('active');
    item1.classList.add('active');
    item2.classList.remove('active');
    item3.classList.remove('active');
}

function item3a() {
    item0.classList.remove('active');
    item1.classList.remove('active');
    item2.classList.add('active');
    item3.classList.remove('active');
}

function item4a() {
    item0.classList.remove('active');
    item1.classList.remove('active');
    item2.classList.remove('active');
    item3.classList.add('active');
}