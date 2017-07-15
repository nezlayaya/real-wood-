var Per = 100;

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(49.1, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    var Per = 200;
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    console.log(Per);
}
myMap();
console.log(Per);


//Slider//

// var currentSlide = 0;
// var slideForRemoving = 0;
// var slider = document.querySelectorAll('.item');
// var listLi = document.querySelectorAll('li');
// var ul = document.querySelector('ul');
//
// ul.addEventListener('click', switchCurrentSlide);
// document.addEventListener('keyup', onKeyUp);
//
// function onKeyUp () {
//
// }
//
// function switchCurrentSlide ( e ) {
//     if(e.target.value||e.target.value === 0){
//         slideForRemoving = currentSlide;
//         currentSlide = e.target.value;
//         changeSlide();
//     }
// }
//
// function clickLeft() {
//     slideForRemoving = currentSlide;
//     if(currentSlide === 0) {
//         currentSlide = slider.length-1;
//     } else {
//         currentSlide--;
//     }
//     changeSlide();
// }
//
// function clickRight() {
//     slideForRemoving = currentSlide;
//     if(currentSlide === slider.length-1) {
//         currentSlide = 0 ;
//     } else {
//         currentSlide++;
//     }
//     changeSlide();
// }
//
//
// function changeSlide() {
//     slider[slideForRemoving].classList.remove('show');
//     slider[currentSlide].classList.add('show');
//
//     listLi[slideForRemoving].classList.remove('active');
//     listLi[currentSlide].classList.add('active');
// }