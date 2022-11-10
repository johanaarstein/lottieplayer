import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import { Lottie } from '../assets/icons';

registerBlockType( metadata.name, {
	icon: Lottie,
	keywords: [
		__( 'animation' ),
		__( 'gif' ),
		__( 'motion' ),
		__( 'vector' ),
		__( 'cover' ),
		__( 'background' ),
	],
	attributes: {
		align: {
			type: 'string',
			default: 'none',
		},
		alt: {
			type: 'string',
			default: __( 'Lottie animation' ),
		},
		autoplay: {
			type: 'boolean',
			default: true,
		},
		controls: {
			type: 'boolean',
			default: false,
		},
		content: {
			type: 'string',
		},
		contentPosition: {
			type: 'string',
		},
		direction: {
			type: 'number',
			default: 1,
		},
		focalPoint: {
			type: 'object',
		},
		height: {
			type: 'number',
			default: null,
		},
		id: {
			type: 'string',
			default: null,
		},
		loop: {
			type: 'boolean',
			default: true,
		},
		minHeight: {
			type: 'number',
		},
		minHeightUnit: {
			type: 'string',
			default: 'px',
		},
		mode: {
			type: 'string',
			default: 'normal',
		},
		objectFit: {
			type: 'string',
			default: 'cover',
		},
		overlayColor: {
			type: 'string',
		},
		renderer: {
			type: 'string',
			default: 'svg',
		},
		speed: {
			type: 'number',
			default: 1,
		},
		src: {
			type: 'string',
		},
		width: {
			type: 'number',
			default: null,
		},
	},

	usesContext: [ 'postId', 'postType' ],
	supports: {
		anchor: true,
		align: true,
		html: false,
		spacing: {
			padding: true,
			margin: [ 'top', 'bottom' ],
			__experimentalDefaultControls: {
				padding: true,
			},
		},
		color: {
			__experimentalDuotone:
				'> .wp-block-cover__image-background, > .wp-block-cover__video-background',
			text: false,
			background: false,
		},
		typography: {
			fontSize: true,
			lineHeight: true,
			__experimentalFontFamily: true,
			__experimentalFontWeight: true,
			__experimentalFontStyle: true,
			__experimentalTextTransform: true,
			__experimentalTextDecoration: true,
			__experimentalLetterSpacing: true,
			__experimentalDefaultControls: {
				fontSize: true,
			},
		},
	},
	editorStyle: 'wp-block-cover-editor',
	style: 'wp-block-cover',

	edit: Edit,

	save,
} );
