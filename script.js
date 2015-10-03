var uriah = {
<<<<<<< HEAD
	evalString: function( inputString ){
        var re = /\/\/.*"|'/i;
        inputString = inputString.toString();
        var matches = inputString.match( re );
        console.log( inputString );
        console.log( matches );
	},
	init: function(){
		$( "#submit" ).click( uriah.evalString );
	}
};
uriah.init();
