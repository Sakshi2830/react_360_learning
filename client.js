// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance , Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  //  const mycylinderSurface = new Surface(
  //   1000,
  //   600,
  //   Surface.SurfaceShape.Cylinder

  //  )
   const myFlatSurface = new Surface(
    700,
  200,
  Surface.SurfaceShape.Flat
   );

   myFlatSurface.setAngle(
    0,0,0
   );
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('welcomeTo360', { /* initial props */ }),
    myFlatSurface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('lobby.jpeg'));
}

window.React360 = {init};
