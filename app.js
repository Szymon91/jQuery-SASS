$('.section__button').hover(function () {
        const $this = $(this);
        $this.css({'background': 'linear-gradient(to right, #9b23ea 10%, #211991 100%',
        'color': 'white',
        'border': 'none',
        'cursor': 'pointer'});
    },
    function () {
        const $this = $(this);
        $this.css({'background': 'white',
        'color': '#9b23ea',
        'cursor': 'auto',
        'border': 'double 2px transparent',
        'border-radius': '7px',
        'background-image': 'linear-gradient(white, white), linear-gradient(to right, #9b23ea 10%, #211991 100%)',
        'background-origin': 'border-box',
        'background-clip': 'content-box, border-box'});
    });

$('.row__image:first-child').hover(function () {
        const $this = $(this);
        $this.css({'border': 'double 3px transparent',
        'border-radius': '3%',
        'background-image': 'linear-gradient(white, white), linear-gradient(45deg, #9b23ea, #00a7a7, #9b23ea)',
        'background-origin': 'border-box',
        'background-clip': 'content-box, border-box'});
    },
    function () {
        $(this).css('border', 'none');
    });

$('.row__image:nth-of-type(2)').hover(function () {
        const $tagI = $('.row__image:nth-of-type(2)  i');
        $tagI.css({'background': 'white',
        'background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'});
        $(this).css('background', 'linear-gradient(to right, #9b23ea 10%, #211991 100%');
        $(this).css('color', 'white');
    },
    function () {
        const $tagI = $('.row__image:nth-of-type(2)  i');
        $tagI.css({'background': 'linear-gradient(120deg, rgb(253, 220, 74), rgb(252, 110, 34))',
        'background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'});
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
    $('.row__image:nth-of-type(1)').before($('.row__image:nth-of-type(3)'));
    $('.row__image:nth-of-type(1)').after($('.row__button:nth-of-type(2)'));
});

