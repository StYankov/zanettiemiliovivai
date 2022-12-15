<?php
define('CUSTOM_CONSTANT', 'dev');
define('SCRIPT_DEBUG', true);

define('WP_CACHE', false);
// define( 'WP_DEBUG', true );



function insert_html_in_header()
{
	echo <<<HTML
        <div class="ribbon"><span class="ribbon__content">DEVELOPMENT</span></div>
        <style>
            .ribbon {
                z-index:99999;
                width: 150px;
                height: 150px;
                overflow: hidden;
                position: fixed;
                bottom: -10px;
                right: -10px;
            }
            .ribbon__content {
                right: -45px;
                bottom: 30px;
                -webkit-transform: rotate(-45deg);
                -ms-transform: rotate(-45deg);
                transform: rotate(-45deg);
                position: absolute;
                display: block;
                width: 200px;
                padding: 10px 0;
                background-color: #f5cd79;
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.192);
                color: #fff;
                text-shadow: 0 1px 1px rgba(0,0,0,.2);
                text-transform: uppercase;
                text-align: center;
                border: 2px dotted #fff;
                outline : 5px solid  #f5cd79;


            }

        </style>
    HTML;
}
/* Admin Dashboard */
add_action('admin_head', 'insert_html_in_header');
/* Front End */
add_action('wp_head', 'insert_html_in_header');
