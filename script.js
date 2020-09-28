function onLoad() {
  const btn = document.querySelector('.navbutton')
  const nav = document.querySelector('.navigation')
  const dropdown = document.querySelector('.dropdown')
  // make btn respond to a click
  btn.addEventListener('click', function() {
    if( nav.classList.contains('open') ){
      nav.classList.remove('open')
    }
    else {
      nav.classList.add('open')
    }
  })
  // dropdown
  dropdown.addEventListener('click', function(evt) {
    if( dropdown.classList.contains('open') ) {
      dropdown.classList.remove('open')
    }
    else {
      dropdown.classList.add('open')
    }
  })
}

window.addEventListener("load", onLoad )