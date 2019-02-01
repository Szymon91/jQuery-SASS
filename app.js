$('.section__button').hover(function () {
        $(this).css('background', 'linear-gradient(to right, #9b23ea 10%, #211991 100%');
        $(this).css('color', 'white');
        $(this).css('border', 'none');
        $(this).css('cursor', 'pointer');
    },
    function () {
        $(this).css('background', 'white');
        $(this).css('color', '#9b23ea');
        $(this).css('cursor', 'auto');
        $(this).css('border', 'double 2px transparent');
        $(this).css('border-radius', '7px');
        $(this).css('background-image', 'linear-gradient(white, white), linear-gradient(to right, #9b23ea 10%, #211991 100%)');
        $(this).css('background-origin', 'border-box');
        $(this).css('background-clip', 'content-box, border-box');
    });

$('.row__image:first-child').hover(function () {
        $(this).css('border', 'double 3px transparent');
        $(this).css('border-radius', '3%');
        $(this).css('background-image', 'linear-gradient(white, white), linear-gradient(-45deg, #9b23ea, #00a7a7)');
        $(this).css('background-origin', 'border-box');
        $(this).css('background-clip', 'content-box, border-box');
    },
    function () {
        $(this).css('border', 'none');
    });

$('.row__image:nth-of-type(2)').hover(function () {
        $('.row__image:nth-of-type(2)  i').css('background', 'white');
        $('.row__image:nth-of-type(2)  i').css('background-clip', 'text');
        $('.row__image:nth-of-type(2)  i').css('-webkit-text-fill-color', 'transparent');
        $(this).css('background', 'linear-gradient(to right, #9b23ea 10%, #211991 100%');
        $(this).css('color', 'white');
    },
    function () {
        $('.row__image:nth-of-type(2)  i').css('background', 'linear-gradient(120deg, rgb(253, 220, 74), rgb(252, 110, 34))');
        $('.row__image:nth-of-type(2)  i').css('background-clip', 'text');
        $('.row__image:nth-of-type(2)  i').css('-webkit-text-fill-color', 'transparent');
        $(this).css('background', 'white');
        $(this).css('color', 'black');
    });

$('.row__image__div--third').hover(function () {
        $(this).css('background', 'rgba(50, 0, 255, .5');
    },
    function () {
        $(this).css('background', 'rgba(0, 0, 255, .5');
    });

$(".row__button").click(function() {
    $('.row__image:nth-of-type(3)').after($('.row__image:nth-of-type(1)'));
    $('.row__image:nth-of-type(3)').after($('.row__image:nth-of-type(1)'));

    $('.row__button:nth-of-type(2)').before($('.row__image:nth-of-type(3)'));
    $('.row__button:nth-of-type(1)').after($('.row__image:nth-of-type(1)'));
});

