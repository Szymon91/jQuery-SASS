$('.section__button').hover(function () {
        $(this).css('background', 'linear-gradient(to right, #9b23ea 10%, #211991 100%');
        $(this).css('color', 'white');
        $(this).css('cursor', 'pointer');
    },
    function () {
        $(this).css('background', 'white');
        $(this).css('color', '#9b23ea');
        $(this).css('cursor', 'auto');
    });

$('.row__image:first-child').hover(function () {
        $(this).css('border', '3px solid transparent');
        $(this).css('border-image', 'linear-gradient(to right, #9b23ea 10%, #211991 100%');
        $(this).css('border-image-slice', '1');
    },
    function () {
        $(this).css('border', 'none');
    });

$('.row__image:nth-of-type(2)').hover(function () {
        $('.row__image:nth-of-type(2)  i').css('color', 'white');
        $(this).css('background', 'linear-gradient(to right, #9b23ea 10%, #211991 100%');
        $(this).css('color', 'white');
    },
    function () {
        $('.row__image:nth-of-type(2)  i').css('color', 'orange');
        $(this).css('background', 'white');
        $(this).css('color', 'black');
    });

$('.row__image__div--third').hover(function () {
        $(this).css('background', 'rgba(50, 0, 255, .5');
    },
    function () {
        $(this).css('background', 'rgba(0, 0, 255, .5');
    });
