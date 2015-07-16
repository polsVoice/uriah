var uriah = {
	evalString: function( inputString ){
		return inputString;
	},
	init: function(){
		console.log( "Uriah initialized" );
		var inputString = $( "#input" ).val();
		$( "#submit" ).click( uriah.evalString( inputString ) );
	}
};
uriah.init();
