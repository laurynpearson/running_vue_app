<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="route in routes">
      <h2>id: {{ route.id }}</h2>
      <h2>Route Name: {{ route.name }}</h2>
      <p>Distance: {{ route.distance }}</p>
      <p><router-link v-bind:to="'/routes/' + route.id">View this Route</router-link></p>
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to the routes index!",
      routes: []
    };
  },
  created: function() {
    axios.get('/api/routes').then(response => {
      this.routes = response.data;
    });
  },
  methods: {}
};
</script>