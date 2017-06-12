export default function (defaults, extras) {
  return Object.keys(defaults).concat(Object.keys(extras)).reduce( function (acc, val) {
    acc[val] = extras[val] === undefined ? defaults[val] : extras[val]
    return acc
  }, {})
}
