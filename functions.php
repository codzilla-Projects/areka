<?php
define('areka_ROOT', get_stylesheet_directory() . '/');
define('areka_URL', get_stylesheet_directory_uri() . '/');
define('areka_ADMIN', admin_url());
define('areka_BlogUrl', get_bloginfo('url'));


require_once(areka_ROOT . 'lib/areka_enqueue_scripts.php');
require_once(areka_ROOT . 'lib/areka_functions.php');
require_once(areka_ROOT . 'lib/areka_meta_fields.php');
require_once(areka_ROOT . 'lib/areka_taxonomy_terms.php');
require_once(areka_ROOT . 'lib/areka_theme_init.php');

?>