<template lang="html">
  <input type="tel"
         v-model="editableValue"
         v-money="{precision, decimal, thousands, prefix, suffix}"
         style="text-align: right" />
</template>

<script>
import money from './directive'
import defaults from './options'
import {format, unformat} from './utils'

export default {
  props: {
    value: {
      required: true,
      type: [Number, String],
      default: 0
    },
    masked: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      default: () => defaults.precision
    },
    decimal: {
      type: String,
      default: () => defaults.decimal
    },
    thousands: {
      type: String,
      default: () => defaults.thousands
    },
    prefix: {
      type: String,
      default: () => defaults.prefix
    },
    suffix: {
      type: String,
      default: () => defaults.suffix
    }
  },

  directives: {money},

  computed: {
    editableValue: {
      get () { return format(this.value, this.$props) },
      set (newValue) {
        this.$emit('input', this.masked ? newValue : unformat(newValue, this.precision))
      }
    }
  }
}
</script>
