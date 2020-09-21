function onLoad() {
  const btn = document.querySelector('.navbutton')
  const nav = document.querySelector('.navigation')
  // make btn respond to a click
  btn.addEventListener('click', function() {
    if( nav.classList.contains('open') ){
      nav.classList.remove('open')
    }
    else {
      nav.classList.add('open')
    }
  })
}

window.addEventListener("load", onLoad )