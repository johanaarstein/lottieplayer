/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-spread */
/* eslint-disable @typescript-eslint/unbound-method */

function overrideXHR() {
	const open = XMLHttpRequest.prototype.open,
		send = XMLHttpRequest.prototype.send;

	function openReplacement(
		this: XMLHttpRequest,
		method: string,
		url: string | URL,
		async?: boolean,
		_user?: string,
		_password?: string
	) {
		const syncMode = async !== false ? 'async' : 'sync';
		console.info(
			`Preparing ${ syncMode } HTTP request : ${ method } ${ url }`
		);
		return open.apply(
			this,
			arguments as unknown as [
				method: string,
				url: string | URL,
				async: boolean,
			]
		);
	}

	function sendReplacement(
		this: XMLHttpRequest & {
			_onreadystatechange?: (
				this: XMLHttpRequest,
				ev: Event
			) => unknown;
		},
		data?: Document | XMLHttpRequestBodyInit | null
	) {
		if ( ! ( data instanceof FormData ) || ! aamdPHPVariables ) {
			return send.apply(
				this,
				arguments as unknown as [
					body?: Document | XMLHttpRequestBodyInit | null | undefined,
				]
			);
		}

		const name = data.get( 'name' );

		if ( typeof name !== 'string' || ! name.endsWith( '.lottie' ) ) {
			return send.apply(
				this,
				arguments as unknown as [
					body?: Document | XMLHttpRequestBodyInit | null | undefined,
				]
			);
		}

		const file = data.get( 'async-upload' );

		if ( ! ( file instanceof File ) ) {
			return send.apply(
				this,
				arguments as unknown as [
					body?: Document | XMLHttpRequestBodyInit | null | undefined,
				]
			);
		}

		const fileReader = new FileReader();

		fileReader.onloadend = async ( { target } ) => {
			try {
				if ( ! ( target?.result instanceof ArrayBuffer ) ) {
					return;
				}
				const lottieBlob = new Blob( [ target.result ] ),
					objectURL = URL.createObjectURL( lottieBlob );

				const dlp = dotLottiePlayer();
				dlp.hidden = true;

				document.body.appendChild( dlp );

				await dlp.load( objectURL );
				const svg = dlp.snapshot( false );
				URL.revokeObjectURL( objectURL );

				if ( ! svg ) {
					throw new Error( 'Failed to create thumbnail' );
				}

				const svgFile = new File(
						[ svg ],
						name.replace( /\.[^/.]+$/, '.svg' ),
						{
							type: 'image/svg+xml',
						}
					),
					formData = new FormData();

				formData.append( 'aamd_thumnail_submit', '' );
				formData.append( 'thumbnail', svgFile );
				const response = await fetch(
					`${ aamdPHPVariables.pluginUrl }includes/upload-thumbnail.php`,
					{ body: formData, method: 'POST' }
				);

				if ( ! response.ok ) {
					throw new Error( response.statusText );
				}
			} catch ( err ) {
				console.error( 'foobar', err );
			}
		};

		fileReader.readAsArrayBuffer( file );

		return send.apply(
			this,
			arguments as unknown as [
				body?: Document | XMLHttpRequestBodyInit | null | undefined,
			]
		);
	}

	XMLHttpRequest.prototype.open = openReplacement;
	XMLHttpRequest.prototype.send = sendReplacement;
}

overrideXHR();
