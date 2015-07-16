var test = {
	assert: function assert( value, desc ){
		var li = document.createElement( "li" );
		li.className = value ? "pass" : "fail";

		// Add the desc to the li
		li.appendChild( document.createTextNode( desc ) );

		// Find the ul and then append the li to it
		document.getElementById( "results" ).appendChild( li );
	},
	init: function(){		
		test.assert( uriah.evalString( "http://www.example.com/index.html", uriah.regex ), "Works with complete URLs" );
		test.assert( uriah.evalString( "www.example.com", uriah.regex ), "Works with URIs (no protocol)" );
	}
};
test.init();
