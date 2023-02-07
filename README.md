# AM LottiePlayer – Vector animations for WordPress

![Awesome Vector Animations](/svn/assets/banner-1544x500.png)

The most complete Lottie Player yet. Lightweight, easy to use, accepts LottieJSON and dotLottie, and works with Gutenberg, Divi Builder and Elementor.

## Description

**The most complete Lottie Player yet.**

AM LottiePlayer is easy to use, lightweight, and gives you total control over how to implement crisp, vectorized animations to your website. Easily set up user interactions, choose between JSON or the optimized dotLottie format, choose whether to serve the files from a CDN or your own *Media Library*, choose whether to render the animations as malleable SVGs or performant Canvases, and choose how to scale the animation. You can add a description for screenreaders and search eninge crawlers.

Upload Lottie animations to WordPress and add them to Gutenberg, Divi, Elementor or via the shortcode `[am-lottieplayer]`.

### Features

- Contains two Gutenberg blocks: a player and a cover block with text overlay – great for headers.
- Contains a Divi Builder Module
- Contains an Elementor Widget
- Contains the shortcode `[am-lottieplayer]`
- Scripts are only loaded for pages where the player is used
- Upload Lottie JSON or dotLottie files to your *Media Library*
- Drag & drop a Lottie JSON or dotLottie file
- Insert a Lottie JSON or dotLottie animation from URL
- Choose renderer, scaling, speed, size, background color, interactions and more from the block settings in Gutenberg. The same settings are accessible in the Divi Module menu and the Elementor Widget menu.

## Installation

### Automatic installation

Automatic installation is the easiest option — WordPress will handle the file transfer, and you won’t need to leave your web browser.

1. Log in to your WordPress dashboard
2. Navigate to the **Plugins** menu
3. Search for **AM LottiePlayer**
4. Click **Install Now** and WordPress will take it from there
5. Activate the plugin through the **Plugins** menu in WordPress

### Manual installation

1. Upload the entire 'am-lottieplayer' folder to your plugins directory
2. Activate the plugin through the **Plugins** menu in WordPress

### After activation

1. Go to the WordPress Block Editor / Elementor / Divi Builder
2. Add new block / widget / module
3. Search for *Lottie*
4. Click on *Lottie* to add the block

If you want to use the shortcode `[am-lottieplayer]`, it has the following parameters:

- src: `string` (required)
- autoplay: `true` | `false`, default: `false`
- controls: `true` | `false`, default: `false`
- loop: `true` | `false`, default: `false`
- objectFit: `cover` | `contain` | `none`, default: `contain`
- speed: `number` (1 – 5), default: 1
- direction: 1 | -1, default: 1
- renderer: `svg` | `canvas` | `html`, default: `svg`
