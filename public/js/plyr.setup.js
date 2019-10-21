const player = new Plyr.setup('.video-js');

$(document).ready(function () {
    var blockVideo = $('.block-video');

    blockVideo.each(function (i, el) {
        $(el).on('mouseleave', function () {
            player[i].pause();
        });
    });

    $(document).on('click', '.btn-show-video', function () {
        $(this).closest('section').find('.block-video').addClass('active');
    });

    $('body').on('click', function (e) {
        if (($(e.target).closest('.block-video').length === 0) && ($('.block-video-hidden').hasClass('active'))) {
            $('.block-video-hidden').removeClass('active');
        }
    });

    $(document).on('click', '.close-video', function () {
        $(this).closest('.block-video').removeClass('active');
    });
});