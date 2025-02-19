<?php
defined('ABSPATH') || exit;

if (class_exists('DiviExtension') && !class_exists('AM_LottieDiviModules')) {
  /**
   * @disregard P1009 Undefined type
   */
  class AM_LottieDiviModules extends DiviExtension
  {
    public $gettext_domain = 'am-lottieplayer';
    public $name = 'am-lottieplayer';
    public $version = AM_LOTTIEPLAYER_VERSION;

    public function __construct($name = 'am-lottieplayer', $args = [])
    {
      /**
       * @disregard P1014 Undefined type
       */
      $this->plugin_dir = plugin_dir_path(__FILE__);
      /**
       * @disregard P1014 Undefined type
       */
      $this->plugin_dir_url = AM_LOTTIEPLAYER_URL;
      parent::__construct($name, $args);
    }
  }

  new AM_LottieDiviModules;

  wp_register_style(
    'am_lottie_et_styles',
    null,
    [],
    '1.0.0'
  );
  wp_enqueue_style('am_lottie_et_styles');

  $customStyle = '
    .et-fb-modules-list ul > li.et-fb-has-svg-icon .et-fb-icon {
      fill: #2b87da !important;
      width: 16px !important;
      min-width: 16px !important;
      height: 16px !important;
      margin: 0 auto 5px !important;
    }';

  wp_add_inline_style('am_lottie_et_styles', $customStyle);
}
