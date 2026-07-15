(function(){
  function ready(fn){
    if(document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function(){
    var menuBtn = document.querySelector('.menu');
    var overlay = document.querySelector('.overlay');
    var links = document.querySelectorAll('.overlay .menu-links a, .overlay .socials a');
    if(!menuBtn || !overlay || !links.length) return;

    links.forEach(function(link){
      link.addEventListener('click', function(){
        var href = link.getAttribute('href');
        if(!href || href === '#' || href.indexOf('#') === 0) return;
        if(link.target === '_blank') return;

        try {
          var isOpened = getComputedStyle(overlay).display !== 'none' || 
                         overlay.classList.contains('w--open') || 
                         menuBtn.classList.contains('w--open');
          if(isOpened) {
            menuBtn.click();
          }
        } catch(err){}
      });
    });
  });
})();
