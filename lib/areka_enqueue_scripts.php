<?php
function areka_admin_scripts_styles($hook) {
    wp_enqueue_style( 'areka-main', areka_URL . 'assets/admin/css/main-style.css');
    //var_dump($hook);
    $areka_pages = ['toplevel_page_content-area','general-options_page_home-page-content','general-options_page_about-page-content','general-options_page_services-page-content','general-options_page_contact-page-content','post.php','post-new.php'];
    if( in_array($hook, $areka_pages) ) { 

        wp_enqueue_style( 'areka-bootsrtap', areka_URL . 'assets/admin/css/bootstrap.min.css');
        wp_enqueue_style( 'areka-style', areka_URL . 'assets/admin/css/style.css');
        wp_enqueue_script( 'areka-popper', areka_URL .'assets/admin/js/popper.min.js', array() ,false, true );
        wp_enqueue_script( 'areka-bootsrtap',areka_URL .'assets/admin/js/bootstrap.bundle.min.js', array() ,false, true );
        wp_enqueue_script( 'areka-script', areka_URL .'assets/admin/js/script.js', array() ,false, true );
        if(function_exists( 'wp_enqueue_media' )){
            wp_enqueue_media();
        }else{
            wp_enqueue_style('thickbox');
            wp_enqueue_script('media-upload');
            wp_enqueue_script('thickbox');
        }
    }
}
 
add_action('admin_enqueue_scripts', 'areka_admin_scripts_styles');


function areka_scripts_styles() {


    wp_enqueue_style( 'areka-bootstrap-css', areka_URL . 'assets/css/bootstrap.min.css' );
    wp_enqueue_style( 'areka-animate-css', areka_URL . 'assets/css/animate.css' );
    wp_enqueue_style( 'areka-swiper-css', areka_URL . 'assets/css/swiper-bundle.min.css' );
    wp_enqueue_style( 'areka-style-css', areka_URL . 'assets/css/style.css' );
    wp_enqueue_style( 'areka-responsive-css', areka_URL . 'assets/css/responsive.css' );


    
    wp_enqueue_script( 'areka-jquery-js',  areka_URL . 'assets/js/jquery.min.js', array() ,false, true );
    wp_enqueue_script( 'areka-bootstrap-js',  areka_URL . 'assets/js/bootstrap.bundle.min.js' , array() ,false, true );
    wp_enqueue_script( 'areka-swiper-bundle-js',  areka_URL . 'assets/js/swiper-bundle.min.js' , array() ,false, true );
    wp_enqueue_script( 'areka-script-js',  areka_URL . 'assets/js/script.js' , array() ,false, true );


}
add_action( 'wp_enqueue_scripts', 'areka_scripts_styles' );

