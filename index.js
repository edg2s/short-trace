( function () {

	var input = document.getElementById( 'input' ),
		output = document.getElementById( 'output' ),
		submit = document.getElementById( 'submit' ),
		copy = document.getElementById( 'copy' ),
		urlPattern = /(https?.*)\:[0-9]+\:[0-9]+/g;

	submit.addEventListener( 'click', function () {
		var match, urls = {}, legend = '',
			value = input.value;
		while( match = urlPattern.exec( input.value ) ) {
			urls[ match[ 1 ] ] = true;
		}
		console.log(urls);

		Object.keys( urls ).forEach( function ( url, i ) {
			value = value.replaceAll( url, 'URL' + ( i + 1 ) );
			legend += 'URL' + ( i + 1 ) + ': ' + url + '\n';
		} );
		output.value = value + '\n\n' + legend;
	} );

	copy.addEventListener( 'click', function () {
		output.setSelectionRange( 0, output.value.length );
		output.focus();
		document.execCommand( 'copy' );
	} );

} )();