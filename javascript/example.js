let scroll = document.querySelector("#scroll")

scroll.onwheel = function(e) {
  document.body.style.overflow = 'hidden'
  wheel = e.deltaY
  scroll.scrollBy(wheel/2.5, 0)
  e.stopPropagation()
  
}

document.body.onwheel = function () {
  document.body.style.overflow = ''
}