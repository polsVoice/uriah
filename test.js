var test = {
	assert: function assert( value, desc ){
		var li = document.createElement( "li" );

		// Assign pass or fail class depending upon boolean value
		li.className = value ? "pass" : "fail";

		// Add the desc to the li
		li.appendChild( document.createTextNode( desc ) );

		// Find the ul and then append the li to it
		document.getElementById( "results" ).appendChild( li );
	},
	init: function(){
		test.assert( uriah.evalString( "foo" ) === "foo", "The string was returned" );
	}
};
test.init();
