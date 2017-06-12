<template lang="html">
<div class="container col-4 col-xl-6 col-md-8 col-sm-10 col-xs-12">
  <label>Component</label>
  <div class="columns">
    <div class="column col-6 col-sm-12">
      <money v-model="price" class="form-input input-lg" v-bind="config"></money>
    </div>
    <div class="column col-6 col-sm-12">
      <h3>{{price}}</h3>
    </div>
  </div>

  <label>Directive</label>
  <div class="columns">
    <div class="column col-6 col-sm-12">
      <input type="tel" v-money="config" v-model="priceDirective" class="form-input input-lg" style="text-align: right" />
    </div>
    <div class="column col-6 col-sm-12">
      <h3>{{priceDirective}}</h3>
    </div>
  </div>

  <div class="columns">
    <div class="column col-2 col-sm-3">
      <label class="form-label" for="prefix">Prefix</label>
    </div>
    <div class="column col-2 col-sm-3">
      <input class="form-input" type="text" id="prefix" v-model="config.prefix" />
    </div>

    <div class="column col-2 col-sm-3">
      <label class="form-label" for="suffix">Suffix</label>
    </div>
    <div class="column col-2 col-sm-3">
      <input class="form-input" type="text" id="suffix" v-model="config.suffix" />
    </div>

    <div class="column col-2 col-sm-3">
      <label class="form-label" for="precision">Precision</label>
    </div>
    <div class="column col-2 col-sm-3">
      <input class="form-input" type="number" id="precision" v-model.number="config.precision" min="0" max="4" />
    </div>

    <div class="column col-2 col-sm-3">
      <label class="form-label" for="decimal">Decimal</label>
    </div>
    <div class="column col-2 col-sm-3">
      <input class="form-input" type="text" id="decimal" v-model="config.decimal" />
    </div>
    <div class="column col-2 col-sm-3">
      <label class="form-label" for="thousands">Thousands</label>
    </div>
    <div class="column col-2 col-sm-3">
      <input class="form-input" type="text" id="thousands" v-model="config.thousands" />
    </div>
    <div class="column col-4 col-sm-5">
      <div class="form-group">
        <label class="form-checkbox">
          <input type="checkbox" id="masked" v-model="config.masked" />
          <i class="form-icon"></i> Masked Output
        </label>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import money from '../index'

Vue.use(money)

export default {
  data () {
    return {
      price: 1234.5,
      priceDirective: 5432.1,
      config: {decimal: ',', thousands: '.', prefix: 'R$ ', suffix: ' #', precision: 2, masked: false}
    }
  }
}
</script>

<style lang="css">
@import url('https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.2.14/spectre.min.css');
input {
  font-family: monospace;
  font-size: 1.8rem !important;
}
</style>
