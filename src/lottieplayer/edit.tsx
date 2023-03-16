import { useEffect, useState } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

import LottieControls from '../components/LottieControls';
import Placeholder from '../components/Placeholder';

import type { BlockEditProps } from 'wordpress__blocks';
import type { PlayerComponentProps } from '../types';

import './editor.scss';

export default function Edit( {
	attributes,
	setAttributes,
}: BlockEditProps< object > ) {
	const { src }: PlayerComponentProps = attributes,
		[ isPlaceholder, setIsPlaceholder ] = useState( true );

	useEffect( () => {
		setIsPlaceholder( ! src || src === '' );
	}, [ src ] );
	return (
		<>
			<LottieControls
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<div { ...useBlockProps() }>
				<Placeholder
					attributes={ attributes }
					setAttributes={ setAttributes }
					isPlaceholder={ isPlaceholder }
				/>
			</div>
		</>
	);
}
