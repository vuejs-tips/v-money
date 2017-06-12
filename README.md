# v-money

Tiny (<2k gzipped) input/directive mask for currency.

# Usage

### Use as componente: https://jsfiddle.net/auom8st8/

```
<template>
  <div>
    <money v-model="price" v-bind="money" /> {{price}}
  </div>
</template>

<script>
  import Money from 'v-money'

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

### References

- https://en.wikipedia.org/wiki/Decimal_mark
- https://docs.oracle.com/cd/E19455-01/806-0169/overview-9/index.html
- http://www.xe.com/symbols.php
- https://github.com/kevinongko/vue-numeric
