import component from './component'
import directive from './directive'
import options from './options'
const VERSION = proccess.env.VERSION

export {
  component,
  directive,
  options,
  VERSION
}

function install (Vue) {
  Vue.directive('money', directive)
  Vue.component('money', component)
}

export default install

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
