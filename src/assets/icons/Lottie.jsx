import { Path, SVG } from '@wordpress/components';

export default function Lottie() {
	return (
		<SVG
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			xmlSpace="preserve"
			viewBox="0 0 80 80"
		>
			<style>
				{ `
				.am-lottieplayer-path {
					fill: url(#a)
				}
				.block-editor-block-toolbar .am-lottieplayer-path,
				.components-panel .am-lottieplayer-path {
					fill: var(--wp-admin-theme-color-darker-10)
				}` }
			</style>
			<defs>
				<radialGradient id="a" cx=".2" cy="1.07" r="1.2">
					<stop offset="10%">
						<animate
							attributeName="stop-color"
							values="#24708f;#e18d4c;#1f374c;#85c6e0;#24708f;"
							dur="3s"
							repeatCount="indefinite"
						/>
					</stop>
					<stop offset="90%">
						<animate
							attributeName="stop-color"
							values="#85c6e0;#24708f;#e18d4c;#1f374c;#85c6e0;"
							dur="6s"
							repeatCount="indefinite"
						/>
					</stop>
				</radialGradient>
			</defs>
			<Path
				className="am-lottieplayer-path"
				d="M60 0H20C9 0 0 9 0 20v39.5C0 71 9 80 20 80h39.5c11 0 20.5-9 20.5-20V20C80 9 71 0 60 0zm4.9 59.7h-7.4V37.1c0-3.2.3-8.2.3-8.2h-.1s-.9 4.7-1.7 7.5l-6.8 23.3h-4l-11-30.2c-.8-2.2-2-5.8-2-5.8h-.1s-1.1 3.4-1.9 5.8L18.7 59.7H15l15-39.4h4.2l11.4 30c.3-1.4 1.2-6.1 2.4-10.2l5.6-19.8H65v39.4z"
			/>
		</SVG>
	);
}
