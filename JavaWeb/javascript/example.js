'use strict'
var body = document.getElementById('body');
var photo = document.getElementById('photo');
var photo1 = document.getElementById('photo1');
var photo2 = document.getElementById('photo2');
function Dark() {
    body.classList.add('active');

}
function Light() {
    body.classList.remove('active');
}

function On() {
    photo.style.filter = 'grayscale(0)';
}

function Off() {
    photo.style.filter = 'grayscale(1)';
}
function On1() {
    photo1.style.filter = 'grayscale(0)';
}

function Off1() {
    photo1.style.filter = 'grayscale(1)';
}
function On2() {
    photo2.style.filter = 'grayscale(0)';
}

function Off2() {
    photo2.style.filter = 'grayscale(1)';
}

var side= document.getElementById('sidebar');

function menu(){

}


function exit(){
    side.style.opacity='0'
}
