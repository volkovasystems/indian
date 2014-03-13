/*
    The Indian procedure is a builder for native modules.
    It should run before deploying any modules that require native builds.
*/

/*
    This will accept the module function and wraps the module function
        in a native supporting environment.
*/
var indian = function indian( module ){

};

/*
    This will accept a path that will be wrapped with native supporting environment.
    
    The indianize will do the following,
    1. Discover the paths.
    2. Parse the module.
    3. Wrap the module.
    
    Inside the indian folder, we will provide an explicit Gruntfile 
        that should be executed first.
        
    By executing this Gruntfile, it will detect the only module outside any folders
        and start wrapping it till all modules in any subfolders are wrapped.
        
    Next, it will create a build folder inside the indian directory.
        I want to make it more fun by naming this folder "totem".
        
    Now when using the Gruntfile on any app repo, it will traverse the submodules
        building the submodules if it finds an indian repo inside.
    
    Then it will create build folder outside the indian folder and transfer all built files
        inside the totem folder so that it can delete the totem folder.
*/
var indianize = function indianize( modulePath ){
    
}

//First we need to determine if this is a browser, nodejs or node-webkit environment.
var determineEnvironment = function determineEnvironment( ){
	var environment;
		
	try{
		if( "env" in process ){
			environment = "nodejs";
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
		var node = document.querySelector( "script[src*='/require']" );
		if( node && "requirejs" in window ){
			return;
		}
		
		//Create a requirejs script loader.
		var scriptNode = document.createElement( "script" );
		

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
