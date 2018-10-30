<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>

    <!-- <hr />
    
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas> -->
    
    <app-footer v-bind:copyright="copyright" v-bind:title="title"></app-footer>
  </div>
</template>

<script>
// This is how to import locally 
import Header from './components/Header.vue';
import Ninjas from './components/Ninjas.vue';
import Footer from './components/Footer.vue';


export default {
  components: {
    'app-header': Header,
    'app-ninjas': Ninjas,
    'app-footer': Footer,
  },

  data: function() {
    return {
      ninjas: [
          {name: 'Ryu', speciality: 'Vue Component', show: false},
          {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
          {name: 'Histoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false},
      ],
      title: 'Vue JS Tutorial for Ninjas',
      copyright: 'Copyright 2018',
    }
  }
}

/**
Notes:
 Primitive types are Strings, Booleans, and Numbers.
 Reference Types are Objects and Arrays

*/
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
    margin: 0;
  }
  h1 {
    color: #ED55A4;
    text-transform: uppercase;
  }

  h3 {
    color: #984ACC;
  }
</style>

