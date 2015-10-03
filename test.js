var test = {
<<<<<<< HEAD
    results: document.getElementById( "results" ),
    assert: function assert( value, desc ){
        "use strict";
        var li = document.createElement( "li" );
        li.className = value ? "pass" : "fail";
        li.appendChild( document.createTextNode( desc ) );
        test.results.appendChild( li );
        if ( !value ){
            li.parentNode.parentNode.className = "fail";
	}
        return li;
    },
    testGroup: function testGroup( name, fn ){
        "use strict";
        test.results = document.getElementById( "results" );
        test.results = test.assert( true, name ).appendChild( document.createElement( "ul" ) );
	      fn();
    },
    init: function(){
        "use strict";
         test.testGroup( "testing inputString", function(){
             test.assert(uriah.evalString(" <li><a href=\"http://blog.atom.io\">Blog</a></li><li><a href=\"http://discuss.atom.io\">Discuss</a></li>"), "it handles HTML");
        } );
    }
}
test.init();
