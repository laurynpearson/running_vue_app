<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>Routes</h2>
      <router-link to="/routes">Routes</router-link>
    <h2>Shoes</h2>
    <router-link to="/shoes">Shoes</router-link>
    <p><iframe width="500" height="300" src="https://api.maptiler.com/maps/hybrid/?key=MtE9MrAXmvD6F55I34m5#" frameborder="0"></iframe></p>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to the Running App!"
    };
  },
  created: function() {},
  methods: {}
};
</script>