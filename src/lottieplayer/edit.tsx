import type { PlayerComponentProps } from '@/types';
import type { BlockEditProps } from '@wordpress/blocks';

import ContextMenu from '@/components/ContextMenu';
import LottieControls from '@/components/LottieControls';
import Placeholder from '@/components/Placeholder';
import PlayerWrapper from '@/context/PlayerWrapper';
import { isTemporaryMedia } from '@/utils';
import { useBlockProps } from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';

import './editor.css';

export default function Edit( {
	attributes,
	className,
	clientId,
	context,
	isSelected,
	setAttributes,
}: BlockEditProps< PlayerComponentProps > ) {
	const isUploadingMedia = isTemporaryMedia(
		attributes.id,
		attributes.src || undefined
	);

	return (
		<PlayerWrapper>
			<LottieControls
				attributes={ attributes }
				className={ className }
				clientId={ clientId }
				context={ context }
				isSelected={ isSelected }
				setAttributes={ setAttributes }
			/>
			{ isUploadingMedia && <Spinner /> }
			<div { ...useBlockProps() }>
				<Placeholder
					attributes={ attributes }
					className={ className }
					clientId={ clientId }
					context={ context }
					isSelected={ isSelected }
					setAttributes={ setAttributes }
				/>
				<ContextMenu
					attributes={ attributes }
					// clientId={ clientId }
					setAttributes={ setAttributes }
				/>
			</div>
		</PlayerWrapper>
	);
}
