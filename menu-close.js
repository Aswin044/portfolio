(function(){
  if('startViewTransition' in document) return;

  function ready(fn){
    if(document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function(){
    var menuBtn = document.querySelector('.menu');
    var links = document.querySelectorAll('.overlay .menu-links a, .overlay .socials a');
    if(!menuBtn || !links.length) return;

    links.forEach(function(link){
      link.addEventListener('click', function(e){
        var href = link.getAttribute('href');
        if(!href || href === '#' || href.indexOf('#') === 0) return;

        var rect = link.getBoundingClientRect();
        var opacity = parseFloat(getComputedStyle(link).opacity || '1');
        var visible = rect.width > 0 && rect.height > 0 && opacity > 0.05;
        if(!visible) return;
        if(link.target === '_blank') return;

        e.preventDefault();
        try {
          fetch(href, {mode:'same-origin', credentials:'same-origin'}).catch(function(){});
        } catch(err){}
        try { menuBtn.click(); } catch(err){}
        setTimeout(function(){ window.location.href = href; }, 320);
      });
    });
  });
})();
