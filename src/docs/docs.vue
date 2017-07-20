<template lang="html">
<div class="container col-4 col-xl-6 col-md-8 col-sm-10 col-xs-12">

  <h2>v-money <small class="label">Currency mask input for Vue</small></h2>

  <p>
    <img class="img-responsive centered" src="https://cdn-images-1.medium.com/max/600/1*Rpc289FpghuHrnzyVpOUig.gif" />
  </p>

  <p class="text-center">
    <a class="btn" href="https://github.com/vuejs-tips/v-money">https://github.com/vuejs-tips/v-money</a>
  </p>

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
      <input type="tel" v-money="config" v-model.lazy="priceDirective" class="form-input input-lg" style="text-align: right" />
    </div>
    <div class="column col-6 col-sm-12">
      <h3>{{priceDirective}}</h3>
    </div>
  </div>

  <label>Directive on Custom Component (TextField from <a href="https://vuetifyjs.com/components/text-fields">vuetify</a>)</label>
  <div class="columns">
    <div class="column col-6 col-sm-12">
      <v-text-field v-money="config" v-model.lazy="priceVuetify"></v-text-field>
    </div>
    <div class="column col-6 col-sm-12">
      <h3>{{priceVuetify}}</h3>
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

  <hr />

  <h3>Features</h3>
  <ul>
    <li>Lightweight (<2KB gzipped)</li>
    <li>Dependency free</li>
    <li>Mobile support</li>
    <li>Component or Directive flavors</li>
    <li>Accept copy/paste</li>
    <li>Editable</li>
  </ul>
</div>
</template>

<script>
import Vue from 'vue'
import money from '../index'
import vuetify from 'vuetify'

Vue.use(money)
Vue.use(vuetify)

export default {
  data () {
    return {
      price: 1234.5,
      priceDirective: 5432.1,
      priceVuetify: 6789.10,
      config: {decimal: ',', thousands: '.', prefix: 'R$ ', suffix: ' #', precision: 2, masked: false}
    }
  }
}
</script>

<style lang="css">
@import url('https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.2.14/spectre.min.css');
.v-money {
  text-align: right;
}
input {
  font-family: monospace;
  font-size: 1.8rem !important;
}
body {
  background-color: #eee;
}
.container {
  background-color: white;
  border-radius: 4px;
  margin-top: 20px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
}
figure {
  text-align: center;
  padding-top: 10px;
}
figure img {
  width: 100%;
  border: 2px solid black;
}
.input-group__input {
  width: 100%;
}
.input-group__input input {
  width: 100%;
}
</style>
