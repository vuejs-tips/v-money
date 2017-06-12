import {format} from './utils'
import assign from './assign'
import defaults from './options'

export default function (el, binding) {
  var opt = assign(defaults, binding.value)

  el.oninput = function () {
    var positionFromEnd = el.value.length - el.selectionEnd
    el.value = format(el.value, opt)
    positionFromEnd = Math.max(positionFromEnd, opt.suffix.length) // right
    positionFromEnd = el.value.length - positionFromEnd
    positionFromEnd = Math.max(positionFromEnd, opt.prefix.length + 1) // left
    if (el === document.activeElement) {
      el.setSelectionRange(positionFromEnd, positionFromEnd)
      setTimeout(function () { el.setSelectionRange(positionFromEnd, positionFromEnd) }, 1) // Android Fix
    }
    el.dispatchEvent(new Event('change')) // v-model.lazy
  }

  el.dispatchEvent(new Event('input')) // force format after initialization
}
