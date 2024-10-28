<figure class="dotlottie-player
	{{ shortcode.options.class }}
	{{ shortcode.options.pos }}" style="
	width: {{ shortcode.options.width ? shortcode.options.width + 'px' : 'auto' }};
	height: {{ shortcode.options.height ? shortcode.options.height + 'px' : 'auto' }};
	">
	<dotlottie-player
	class="lottie-element"
	data-autoplay="{{ shortcode.options.autoplay }}"
		data-controls="{{ shortcode.options.controls }}"
	data-loop="{{ shortcode.options.loop }}"
		data-subframe="{{ shortcode.options.subframe }}"
	simple
	src="{{ shortcode.options.src || '<?php echo $aamd_lottie_upload->get_default_file(); ?>' }}"
		description="{{ shortcode.options.alt }}"
	renderer="{{ shortcode.options.renderer }}"
		mode="{{ shortcode.options.mode === 'true' ? 'bounce' : 'normal' }}"
		intermission="{{ shortcode.options.intermission }}" 
	objectfit="{{ shortcode.options.objectfit }}"
		direction="{{ shortcode.options.direction === 'true' ? -1 : 1 }}"
	speed="{{ shortcode.options.speed }}"
		data-segment_in="{{ shortcode.options.segment_in }}"
	data-segment_out="{{ shortcode.options.segment_out }}">
	</dotlottie-player>
</figure>
