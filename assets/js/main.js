$(document).ready(function () {
    let button = $('#burger');
    let nav = $('#topnav');
    let link = $('.topnav__link');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    link.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    $('.page').click(function (event) {
        if ($(event.target).closest("#burger").length)
            return;
        if ($(event.target).closest("#topnav").length)
            return;
        nav.removeClass('active');
        button.removeClass('active');
    });

    function toggleMenu() {
        nav.toggleClass('active');
        button.toggleClass('active');
    }
});