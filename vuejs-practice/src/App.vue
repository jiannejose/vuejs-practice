<template>
  <div>
    <h1>{{ title }}</h1>
    <h3>{{ greeting('evening', 'Ji') }}</h3>
  </div>
</template>

<script>
export default {

  data: function() {
    return {
      title: 'First Vue File',
    }
  },

  methods: {
    greeting: function(time, name) {
      return `Good ${time}, ${name}!`;
    }
  }
}
</script>

<style>

</style>
