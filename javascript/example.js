let scroll = document.querySelector("#scroll")

scroll.onwheel = function(e) {
  wheel = e.deltaY
  scroll.scrollBy(wheel/2.5, 0)
  e.stopPropagation()  
}
