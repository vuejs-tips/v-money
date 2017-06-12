# v-money

Tiny (<2k gzipped) input/directive mask for currency.

## Features

- Tiny
- Dependency Free
- Component or Directive flavors
- Support edit in any place of the input
- Mobile support

## Usage

### A. Globally

```js
import Vue from 'vue'
import money from 'v-money'

Vue.use(money, {precision: 4}) // register directive v-money and component <money>
```

### B. Use as component: https://jsfiddle.net/auom8st8/

```html
<template>
  <div>
    <money v-model="price" v-bind="money" /> {{price}}
  </div>
</template>

<script>
  import {Money} from 'v-money'

  export default {
    components: {Money},

    data () {
      return {
        price: 123.45,
        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: ' #',
          precision: 2,
          masked: false
        }
      }
    }
  }
</script>
```

### C. Use as directive: https://jsfiddle.net/auom8st8/
Must use `vmodel.lazy` to bind works properly.
```html
<template>
  <div>
    <input v-model.lazy="price" v-money="money" /> {{price}}
  </div>
</template>

<script>
  import {VMoney} from 'v-money'

  export default {
    data () {
      return {
        price: 123.45,
        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: ' #',
          precision: 2,
          masked: false
        }
      }
    },

    directives: {VMoney}
  }
</script>
```

## Properties

| property  | Required | Type    | Default | Description                                             |
|-----------|----------|---------|---------|---------------------------------------------------------|
| precision | **true** | Number  | 2       | How many decimal places                                 |
| decimal   | false    | String  | "."       | Decimal separator                                       |
| thousands | false    | String  | ","       | Thousands separator                                     |
| prefix    | false    | String  | ""      | Currency symbol followed by a Space, like "R$ "         |
| suffix    | false    | String  | ""      | Percentage for example: " %"                            |
| masked    | false    | Boolean | false   | If the componente output should include the mask or not |

### References

- https://en.wikipedia.org/wiki/Decimal_mark
- https://docs.oracle.com/cd/E19455-01/806-0169/overview-9/index.html
- http://www.xe.com/symbols.php
- https://github.com/kevinongko/vue-numeric
- https://github.com/plentz/jquery-maskmoney
