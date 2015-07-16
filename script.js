var uriah = {
	regex: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
	evalString: function( inputString, regex ){
		if ( inputString.match( regex ) ) {return true;}
		else { return false; }
	},
	init: function(){
	}
};
uriah.init();
