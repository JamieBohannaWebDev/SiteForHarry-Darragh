$('nav').hide();
$('.HS1-overlay').hide();
$('.HS2-overlay').hide();
$('.HS3-overlay').hide();
$('.HS4-overlay').hide();
$('.HS5-overlay').hide();
$('.HS6-overlay').hide();
$('.HS7-overlay').hide();
$('.HS8-overlay').hide();
$(document).ready(function () {
    $('.menu').click(function () {
        $('.mini-menu').fadeOut(500);
        $('nav').slideDown(500);
    });
    $('.alt-menu').click(function () {
        $('.mini-menu').fadeIn(700);
        $('nav').slideUp(500);
    });
    $("#hero-title").typed({
        strings: ["Welcmpb", "Welcome"]
        , typeSpeed: 100
    });
    $('.HS1').mouseenter(function () {
        $('.HS1-overlay').slideDown(500);
    });
    $('.HS1').mouseleave(function () {
        $('.HS1-overlay').slideUp(500);
    });
    $('.HS2').mouseenter(function () {
        $('.HS2-overlay').slideDown(500);
    });
    $('.HS2').mouseleave(function () {
        $('.HS2-overlay').slideUp(500);
    });
    $('.HS3').mouseenter(function () {
        $('.HS3-overlay').slideDown(500);
    });
    $('.HS3').mouseleave(function () {
        $('.HS3-overlay').slideUp(500);
    });
    $('.HS4').mouseenter(function () {
        $('.HS4-overlay').slideDown(500);
    });
    $('.HS4').mouseleave(function () {
        $('.HS4-overlay').slideUp(500);
    });
    $('.HS5').mouseenter(function () {
        $('.HS5-overlay').slideDown(500);
    });
    $('.HS5').mouseleave(function () {
        $('.HS5-overlay').slideUp(500);
    });
    $('.HS6').mouseenter(function () {
        $('.HS6-overlay').slideDown(500);
    });
    $('.HS6').mouseleave(function () {
        $('.HS6-overlay').slideUp(500);
    });
    $('.HS7').mouseenter(function () {
        $('.HS7-overlay').slideDown(500);
    });
    $('.HS7').mouseleave(function () {
        $('.HS7-overlay').slideUp(500);
    });
    $('.HS8').mouseenter(function () {
        $('.HS8-overlay').slideDown(500);
    });
    $('.HS8').mouseleave(function () {
        $('.HS8-overlay').slideUp(500);
    });
    
    $('.single-item').slick({
        autoplay: true,
        pauseOnHover: true,
        arrows: false,
        autoplaySpeed: 3000
  });
});