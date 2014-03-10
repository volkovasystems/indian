
var indian = function indian( module ){

};

//First we need to determine if this is a browser, nodejs or node-webkit environment.
var determineEnvironment = function determineEnvironment( ){
	try{
		var environment;
		if( "env" in process ){
			environment = "nodejs"
		}
	}catch( error ){
		environment = "browser";
	}
	if( environment == "nodejs" ){
		try{
			if( window && document ){
				environment = "node-webkit";
				window.environment = environment;
			}
		}catch( error ){
			environment = "nodejs";
			global.environment = environment;
		}
	}else if( environment == "browser" ){
		window.environment = environment;
	}
	return environment;
};

var determinePath = function determinePath( ){
	
};

var prepareRequirements = function prepareRequirements( ){
	if( environment == "node-webkit" ||
		environment == "browser" )
	{
		//Check for the presence of requirejs
		var node = document.querySelector("script[src*='/require']");
		if( node && "requirejs" in window ){
			return;
		}
		

	}else{
		//Use jsdom on this. Create an instance of jsdom
		//	and expose the needed environment.
		var window = require( "jsdom" ).jsdom( ).parentWindow( );
		global.window = window;
		for( var key in window ){
			if( !( key in global ) ){
				global[ key ] = window[ key ];	
			}
		}
		if( !( indianInternvalEngine in global ) ){
			global.indianIntervalEngine = setInterval( function intervalEngine( ){
				for( var key in window ){
					if( !( key in global ) ){
						global[ key ] = window[ key ];	
					}
				}	
			}, 1 );

			global.stopIndianIntervalEngine = function stopIndianIntervalEngine( ){
				if( indianIntervalEngine ){
					clearInterval( indianIntervalEngine );	
				}
			};

			process.on( "exit",
				function onExit( ){
					stopIndianIntervalEngine( );
				} );

			process.on( "uncaughtException",
				function onUncaughException( ){
					stopIndianIntervalEngine( );
				} );
		}
	}
	
	if( environment == "browser" ){
		
	}

};
