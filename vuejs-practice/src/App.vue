<template>
  <div>
    <app-header></app-header>
    <app-ninjas></app-ninjas>
    
    <app-footer></app-footer>
  </div>
</template>

<script>
// This is how to import locally 
import Header from './components/Header.vue';
import Ninjas from './components/Ninjas.vue';
import Footer from './components/Footer.vue';

//*

export default {
  components: {
    'app-header': Header,
    'app-ninjas': Ninjas,
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
