import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

import type { BlockSaveProps } from 'wordpress__blocks';
import type { PlayerComponentProps } from '../types';

export default function save( {
	attributes,
}: BlockSaveProps< PlayerComponentProps > ) {
	const {
			align,
			alt,
			autoplay,
			background,
			controls,
			clickEvent,
			direction,
			fullscreen,
			height,
			heightUnit,
			hover,
			loop,
			mode,
			mouseout,
			objectFit,
			renderer,
			selector,
			speed,
			src,
			width,
		} = attributes,
		heightWithUnit =
			height && heightUnit ? `${ height }${ heightUnit }` : height,
		style = {
			minHeight: fullscreen ? '100vh' : heightWithUnit || undefined,
		},
		dataSelector = JSON.stringify( selector ),
		parseWidth = ( num: number ) => {
			if ( align === 'wide' || align === 'full' ) return '100%';
			if ( num && typeof num === 'number' ) return `${ num }px`;
			return null;
		};

	return (
		<div { ...useBlockProps.save( { style } ) }>
			<span
				aria-hidden="true"
				className={ `wp-block-gb-lottiecover__background` }
				style={ { backgroundColor: background } }
			/>
			<dotlottie-player
				class={ `lottie-element ${
					selector?.id ? 'has-selector' : ''
				}` }
				autoplay={ autoplay }
				controls={ controls }
				description={ alt }
				direction={ direction }
				data-direction={ direction }
				data-mouseover={ hover }
				data-mouseout={ mouseout }
				data-click={ clickEvent }
				data-selector={ dataSelector }
				loop={ loop }
				mode={ mode }
				objectfit={ objectFit }
				renderer={ renderer }
				speed={ speed }
				src={ src as string }
				style={ {
					width: parseWidth( width as number ),
					height:
						height && typeof height === 'number'
							? `${ height }px`
							: null,
					backgroundColor: background,
				} }
			/>
			<div
				{ ...useInnerBlocksProps.save( {
					className: 'wp-block-gb-lottiecover__inner-container',
				} ) }
			/>
		</div>
	);
}
