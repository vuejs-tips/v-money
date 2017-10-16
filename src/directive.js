import {format, setCursor, event} from './utils'
import assign from './assign'
import defaults from './options'

export default function (el, binding) {
  if (!binding.value) return
  var opt = assign(defaults, binding.value)

  // v-money used on a component that's not a input
  if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
    var els = el.getElementsByTagName('input')
    if (els.length !== 1) {
      // throw new Error("v-money requires 1 input, found " + els.length)
    } else {
      el = els[0]
    }
  }

  el.oninput = function () {
    var positionFromEnd = el.value.length - el.selectionEnd
    el.value = format(el.value, opt)
    positionFromEnd = Math.max(positionFromEnd, opt.suffix.length) // right
    positionFromEnd = el.value.length - positionFromEnd
    positionFromEnd = Math.max(positionFromEnd, opt.prefix.length + 1) // left
    setCursor(el, positionFromEnd)
    el.dispatchEvent(event('change')) // v-model.lazy
  }

  el.onfocus = function () {
    setCursor(el, el.value.length - opt.suffix.length)
  }

  el.oninput()
  el.dispatchEvent(event('input')) // force format after initialization
}
