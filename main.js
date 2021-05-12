var img1 = document.getElementById('kep1');
var img2 = document.getElementById('kep2');
var img3 = document.getElementById('kep3');
var img4 = document.getElementById('kep4');
var img1copy = document.getElementById('kep1copy');
var img2copy = document.getElementById('kep2copy');
var img3copy = document.getElementById('kep3copy');
var img4copy = document.getElementById('kep4copy');
var el = document.querySelector(".close");
var nev = document.getElementById('nev');

img1.onclick = function() {
    img1copy.style.display = "block";
    img2copy.style.display = "none";
    img3copy.style.display = "none";
    img4copy.style.display = "none";
    nev.innerHTML = 'Lil bub';
}

img2.onclick = function() {
    img1copy.style.display = "none";
    img2copy.style.display = "block";
    img3copy.style.display = "none";
    img4copy.style.display = "none";
    nev.innerHTML = 'Bob az utcamacska';
    nev.style.right = "1100px"
}

img3.onclick = function() {
    img1copy.style.display = "none";
    img2copy.style.display = "none";
    img3copy.style.display = "block";
    img4copy.style.display = "none";
    nev.innerHTML = 'Grumpy cat';
    nev.style.right = "1180px"
}

img4.onclick = function() {
    img1copy.style.display = "none";
    img2copy.style.display = "none";
    img3copy.style.display = "none";
    img4copy.style.display = "block";
    nev.innerHTML = 'Meow ezredes';
    nev.style.right = "1150px"
}

el.onclick = function() {
    img1copy.style.display = "none";
    img2copy.style.display = "none";
    img3copy.style.display = "none";
    img4copy.style.display = "none";
    nev.innerHTML = '';
}