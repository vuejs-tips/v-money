import {format, backspace} from './utils'
import assign from './assign'
import defaults from './options'

function dispatchDelete (e) {
  var key = e.keyCode || e.which
  if (key === 8 || key === 46) { // Backspace / Delete
    e.preventDefault()
    e.target.dispatchEvent(new KeyboardEvent('keypress'))
  }
}

export default function (el, binding) {
  var opt = assign(defaults, binding.value)

  el.value = format(el.value, opt)
  keepCursorBeforeSuffix()

  function keepCursorBeforeSuffix () {
    if (el === document.activeElement) {
      var index = el.value.length - opt.suffix.length
      el.setSelectionRange(index, index)
    }
  }

  function keypress (e) {
    e.preventDefault()
    var key = e.keyCode || e.which
    if (key === 0) { // Backspace / Delete
      backspace(el)
    }
    el.value += String.fromCharCode(key)
    el.value = format(el.value, opt)
    el.dispatchEvent(new Event('input'))
  }

  el.onkeydown = dispatchDelete
  el.onkeypress = keypress
  el.oninput = keepCursorBeforeSuffix
  el.dispatchEvent(new Event('input'))
}
