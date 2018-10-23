<template>
  <div>
    <app-header></app-header>
    <!-- <h1>{{ title }}</h1>
    <ninjas></ninjas> -->
    
    <app-footer></app-footer>
  </div>
</template>

<script>
// This is how to import locally 
// import Ninjas from './Ninjas.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

//*

export default {
  components: {
    // 'ninjas': Ninjas,
    'app-header': Header,
    'app-footer': Footer,
  },

  data: function() {
    return {
      // title: 'Ninja App',
    }
  }
}
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
  h1 {
    color: #ED55A4;
    text-transform: uppercase;
  }

  h3 {
    color: #984ACC;
  }
</style>
