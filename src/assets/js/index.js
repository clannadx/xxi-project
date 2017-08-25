window.onload = function () {
  setRem()
  window.addEventListener('orientationchange', setRem)
  window.addEventListener('resize', setRem)
  function setRem () {
    var html = document.querySelector('html')
    var width = html.getBoundingClientRect().width
    html.style.fontSize = width / 7.5 + 'px'
  }
}

