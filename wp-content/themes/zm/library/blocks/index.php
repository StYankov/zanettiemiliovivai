<?php
$config = THEME_JSON;
$template_dir = get_template_directory();
$path = $config["settings"]["gutenberg"]["blocks"]["path"];

add_action('wp_enqueue_scripts', 'gut_blocks_autoloader');
add_action('enqueue_block_editor_assets', 'gut_blocks_autoloader');
function gut_blocks_autoloader()
{
    //blocks autoloader

    $config = THEME_JSON;
    $template_dir = get_template_directory();
    $path = $config["settings"]["gutenberg"]["blocks"]["path"];


    foreach ($config["settings"]["gutenberg"]["blocks"]["autoload"] as $key => $block) {
        register_block_type("$template_dir/$path/$block");
    }
}


// This was ran on init previously, but did not work
add_action('enqueue_block_editor_assets', 'gutenberg_autoload_dynamic_blocks');
add_action('wp_enqueue_scripts', 'gutenberg_autoload_dynamic_blocks');
function gutenberg_autoload_dynamic_blocks()
{
    global $config;
    global $template_dir;
    global $path;
    if (!empty($config["settings"]["gutenberg"]["blocks"]["dynamic_blocks"])) {
        foreach ($config["settings"]["gutenberg"]["blocks"]["dynamic_blocks"] as $block_path => $block) {
            if (file_exists(__DIR__ . "/$block_path/init.php") && $block["include_php"]) {
                // require init.php if exists
                require_once __DIR__ . "/$block_path/init.php";
            }

            $callback = (!empty($block['callback'])) ? array(
                'render_callback' => $block['callback']
            ) : array();

            register_block_type_from_metadata(__DIR__ . "/$block_path/block.json", $callback);
        }
    }
}

// enable lazy gutenerg loading
add_filter('should_load_separate_core_block_assets', '__return_true');
