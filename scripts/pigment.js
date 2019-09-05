let currentColor = document.getElementsByClassName('current-color-text');
let irgb = document.getElementById('irgb');
let ihsl = document.getElementById('ihsl');
let icmyk = document.getElementById('icmyk');

 function convertColor(color){
      
       let rgb = hexaToRgb(color);
       let hsl = hexToHSL(color);
       let cmyk = hexToCMYK(color);

       irgb.value = rgb.r+', ' + rgb.g+',' + rgb.b;
       ihsl.value = hsl.h+'° ' + hsl.s+'% ' + hsl.l+'%';
       icmyk.value = cmyk.c+'% ' + cmyk.m+'% '+ cmyk.y+'% '+ cmyk.k+'%';
    
}

/*Install Feature*/

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

async function install() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    console.log(deferredPrompt)
    deferredPrompt.userChoice.then(function(choiceResult){

      if (choiceResult.outcome === 'accepted') {
      console.log('Your PWA has been installed');
    } else {
      console.log('User chose to not install your PWA');
    }

    deferredPrompt = null;

    });

 
  }
}
