cd /users/raynovarina/sites/AtomProjects/harp/canvas-weiwei-copy-image/

per: http://www.weiwei-tv.com/testO.php
     https://stackoverflow.com/questions/37245251/canvas-draw-image-pixel-by-pixel-and-requestanimationframe-timing

Created and initialized harp app from git respository:
cd /users/raynovarina/sites/AtomProjects/harp/
$ git clone https://github.com/RayNovarina/harp-canvas-petrospap-breathing-halftone.git canvas-weiwei-copy-image

Start harp server:
$ harp server -p 9005

Access via localhost:9005
============================

Modify package.json and Procfile files for Heroku deploy:
  package.json:

    {
      "name": "harp-canvas-weiwei-copy-image",
      "version": "0.0.1",
      "description": "Harp server App: javascript/canvas/copy image",
      "dependencies": {
        "harp": "*"
      }
    }

  Procfile:

    web: harp server --port $PORT

At github account, create new repository: harp-heroku-canvas-weiwei-copy-image and then
locally.
  $ git init
  $ git remote add origin https://github.com/RayNovarina/harp-heroku-canvas-weiwei-copy-image.git

Create Heroku app:
  $ heroku create harp-ctx2d-copy-image-94037

$ git remote -v
  heroku  https://git.heroku.com/harp-ctx2d-copy-image-94037.git (fetch)
  heroku  https://git.heroku.com/harp-ctx2d-copy-image-94037.git (push)
  origin  https://github.com/RayNovarina/harp-heroku-canvas-weiwei-copy-image.git (fetch)
  origin  https://github.com/RayNovarina/harp-heroku-canvas-weiwei-copy-image.git (push)

Deploy changes to github and heroku:
  $ git add .
  $ git commit -am "First Harp + Heroku commit"
  $ git push origin master
  $ git push heroku master

View on Heroku:

  https://harp-harp-ctx2d-copy-image-94037.herokuapp.com shows:

  Welcome to harp/canvas-weiwei-copy-image.
  Deployed locally at http://localhost:9005/
  Deployed on Heroku at https://harp-harp-ctx2d-copy-image-94037.herokuapp.com/

------------------------------
Replace with github exploding exploding profiles code and redeploy working
version to Heroku.

commit and push fixed version to github.
push to heroku.

load heroku version via https://harp-harp-ctx2d-copy-image-94037.herokuapp.com/

===============================
if ( isJustOne ) {
  onlyIf = onlyIf || {  };
  if ( onlyIf.justOne ) {
    if ( onlyIf.particleInitTrace == undefined &&
         onlyIf.animationTrace == undefined ) {

    }
  //onlyIf.particleInitTrace = true;
  onlyIf.animationTrace = true;
}

} else if ( onlyIf.animationTrace ) {
  //----------------------------------------------
  // Always check for animation loop limits. The only place we do check.
  if ( ( !isTracePixell && pluginThis.tracingParticleInitialization ) ||
    pluginThis.animateCycles > pluginThis.options.maxAnimationCycles ) {
    console.log( "**** STOPPED ANIMATION: " +
        ( pluginThis.tracingParticleInitialization
          ? "Because we were tracing Particle Initialization. "
          : "" ) +
        ( pluginThis.animateCycles > pluginThis.options.maxAnimationCycles
          ? "Because we have made " + pluginThis.animateCycles + " animate() cycles. Max is set to " + pluginThis.options.maxAnimationCycles
          : "" ) +
        ". Num Particles[]: " + pluginThis.particles.length +
        ". numParticlesRenderedAtTargetSize: " + pluginThis.numParticlesRenderedAtTargetSize,
        ". ****");
    pluginThis.isActive = false;
    return;
  }
  if ( !isTracePixell && args.animateCycles == undefined && logLevel !== 'animationTrace' ) {
    return;
  }

  =================
  var loggedAsParticleInitTrace = false;
	//-----------------------------------------
	if ( ( onlyIf.particleInitTrace && logLevel == 'particleInitTrace' ) ||
       ( logLevel == 'tracePixell' || logLevel == 'justCopy' ) ) {
		//---------------------------------------
		pluginThis.tracingParticleInitialization = true;
		var logIt = false;
		if ( args.outer_index == undefined ) {
			logIt = true;
		} else if ( pluginThis.getParticlesMethod == 'getCartesianGridParticles' ) {
			// Only trace first and last 5 particle inits for every 4 loops.
			if ( args.outer_index == 0 ||
			     args.outer_index == pluginThis.maxParticlesInitOuterIndex ||
				 	 args.outer_index % 4 == 0 ) {
				if ( args.inner_index < 5 ||
			 		 	 args.inner_index >  pluginThis.maxParticlesInitInnerIndex - 4 ) {
					logIt = true;
				}
				if ( args.inner_index == 0 ||
			 		   args.inner_index ==  pluginThis.maxParticlesInitInnerIndex - 4 ) {
				  console.log( "                                      .............." );
			  }
			}
		}
		if ( logIt ) {
			console.log( args.msg );
			loggedAsParticleInitTrace = true;
			pluginThis.particleInitLogLines += 1;
			return;
		}
	}

	var loggedAsAnimationTrace = false;
	if ( ( onlyIf.animationTrace && logLevel == 'animationTrace' ) ||
	     ( logLevel == 'tracePixell' || logLevel == 'justCopy' ) ) {
		var logIt = false;
		if ( args.outerIndex == undefined && args.animateCycles == undefined ) {
			logIt = true;
		} else {
			pluginThis.tracingAnimation = true;
			if ( args.animateCycles !== undefined ) {
				// Only trace first animation cycles of every 20 loops.
				if ( args.animateCycles % 20 == 1 ) {
					logIt = true;
				}
			} else if ( args.outerIndex !== undefined ) {
				// Only trace first 5 particle animation updates for every 50 particles.
				if ( (args.innerIndex < 5 || args.innerIndex > pluginThis.maxRenderGridInnerIndex - 4) ||  // first 5 or last 5
				 	  	args.innerIndex % 50 == 0 ) { // every 50
					logIt = true;
				}
				if ( args.innerIndex == 0 ) {
						console.log( "                                      .............." );
				}
			}
		}
		if ( logIt &&
				 pluginThis.animationLogLines < pluginThis.maxAnimationLogLines ) {
				 pluginThis.animationLogLines += 1;
				 loggedAsAnimationTrace = true;
			 	 console.log( args.msg );
				 return;
		}
	}
