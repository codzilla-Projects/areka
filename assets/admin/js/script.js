jQuery(document).ready(function($) {

    $('.header_img_upload').click(function(e) {
        e.preventDefault();
            var custom_uploader = wp.media({
                title: 'Image Choose',
                button: {
                text: 'Upload Image'
                },
                multiple: false  // Set this to true to allow multiple files to be  selected
            })
        .on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
                $('.header_img').attr('src', attachment.url);
                $('.header_img_url').val(attachment.url);
            })
        .open();
    });  

    $('.footer_img_upload').click(function(e) {
        e.preventDefault();
            var custom_uploader = wp.media({
                title: 'Image Choose',
                button: {
                text: 'Upload Image'
                },
                multiple: false  // Set this to true to allow multiple files to be  selected
            })
        .on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
                $('.footer_img').attr('src', attachment.url);
                $('.footer_img_url').val(attachment.url);
            })
        .open();
    });

    $('.favicon_img_upload').click(function(e) {
        e.preventDefault();
            var custom_uploader = wp.media({
                title: 'Image Choose',
                button: {
                text: 'Upload Image'
                },
                multiple: false  // Set this to true to allow multiple files to be  selected
            })
        .on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
                $('.favicon_img').attr('src', attachment.url);
                $('.favicon_img_url').val(attachment.url);
            })
    .open();
    });

    $('.about_img_upload').click(function(e) {
        e.preventDefault();
            var custom_uploader = wp.media({
                title: 'Image Choose',
                button: {
                text: 'Upload Image'
                },
                multiple: false  // Set this to true to allow multiple files to be  selected
            })
        .on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
                $('.about_img').attr('src', attachment.url);
                $('.about_img_url').val(attachment.url);
            })
    .open();
    });

    $('.about_second_img_upload').click(function(e) {
        e.preventDefault();
            var custom_uploader = wp.media({
                title: 'Image Choose',
                button: {
                text: 'Upload Image'
                },
                multiple: false  // Set this to true to allow multiple files to be  selected
            })
        .on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
                $('.about_second_img').attr('src', attachment.url);
                $('.about_second_img_url').val(attachment.url);
            })
    .open();
    });

    $('.faq_img_upload').click(function(e) {
        e.preventDefault();
            var custom_uploader = wp.media({
                title: 'Image Choose',
                button: {
                text: 'Upload Image'
                },
                multiple: false  // Set this to true to allow multiple files to be  selected
            })
        .on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
                $('.faq_img').attr('src', attachment.url);
                $('.faq_img_url').val(attachment.url);
            })
    .open();
    });

    $('.video_img_upload').click(function(e) {
        e.preventDefault();
            var custom_uploader = wp.media({
                title: 'Image Choose',
                button: {
                text: 'Upload Image'
                },
                multiple: false  // Set this to true to allow multiple files to be  selected
            })
        .on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
                $('.video_img').attr('src', attachment.url);
                $('.video_img_url').val(attachment.url);
            })
    .open();
    });

    /*-------------------------About Page----------------------------------------------------*/
    $('.about_page_img_upload').click(function(e) {
        e.preventDefault();
            var custom_uploader = wp.media({
                title: 'Image Choose',
                button: {
                text: 'Upload Image'
                },
                multiple: false  // Set this to true to allow multiple files to be  selected
            })
        .on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
                $('.about_page_img').attr('src', attachment.url);
                $('.about_page_img_url').val(attachment.url);
            })
    .open();
    });

    $('.parallax_about_page_img_upload').click(function(e) {
        e.preventDefault();
            var custom_uploader = wp.media({
                title: 'Image Choose',
                button: {
                text: 'Upload Image'
                },
                multiple: false  // Set this to true to allow multiple files to be  selected
            })
        .on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
                $('.parallax_about_page_img').attr('src', attachment.url);
                $('.parallax_about_page_img_url').val(attachment.url);
            })
    .open();
    });
});


   