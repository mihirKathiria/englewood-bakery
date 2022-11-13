$(function() {

    // Animate on Scroll initialization
    AOS.init();

    $(document).click(function() {
        $("header .toggle").removeClass('is-active');
    });

    $('body.page-faq article h2').addClass('toggle solo');
    $('body.page-retail-menu .menu-nav a').addClass('make-active');

    // Menu item "slideshow" for sub-items
    var menu_slideshow_playing = $('body.template-menu-item .varieties a').length ? true : false;

    $('body.template-menu-item .varieties a').click(function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();

        menu_slideshow_playing = false;
        $('body.template-menu-item .varieties a').removeClass('active');

        $(e.target).addClass('active');
        var target_image = e.target.href.split('#').slice(-1).pop();

        $('figure.hero img').removeClass('active');
        $('figure.hero img#' + target_image).addClass('active');
    });

    // Player for menu item slideshow
    setInterval(function() {
        if (menu_slideshow_playing) {
            var active_image = $('figure.hero img.active');
            var next_image = active_image.next().length ? active_image.next() : active_image.siblings().first();
            next_image.addClass('active');
            active_image.removeClass('active');

            var next_link = $('body.template-menu-item .varieties a[href="#' + next_image.attr('id') + '"]');
            $('body.template-menu-item .varieties a').removeClass('active');
            next_link.addClass('active');
        }
    }, 3000);

    $('.make-active').click(function(e) {
        $('.make-active').removeClass('active');
        $(this).addClass('active');
    });

    $('.toggle').click(function(e) {
        e.stopPropagation();
        var toggler = $(this);
        var only_on = toggler.data('only-on');
        var only_me = toggler.hasClass('solo');

        // Note the next neighbor, likely the toggle target
        var next_neighbor = toggler.next();

        // If only this one, close the others
        if (only_me) {
            $('.toggle.is-active').not(toggler).removeClass('is-active');
        }

        // If this is supposed to only toggle on certain screen sizes
        if (only_on) {
            // Look for the body:after content which is put there by _breakpoint.scss
            var body_label = getComputedStyle(document.body, ':after').content.replace(/\"/g, '');

            // Split up our various strings to compare arrays
            var only_on_strings = only_on.split(/\s/);
            var body_label_strings = body_label.split(/\s/);

            // Calculate the intersection of our arrays
            var intersection = only_on_strings.filter(function(n) {
                return body_label_strings.includes(n);
            });

            // If there's no intersection, don't proceed!
            if (!intersection.length) {
                return;
            }
        }

        // Prevent default action (i.e. linking to a new page) and toggle the "on" class
        e.preventDefault();
        toggler.toggleClass('is-active');
    });

    $('#announcement-close').click(function() {
        $('#announcement').css('display', 'none');
    });
});