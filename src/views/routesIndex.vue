<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="route in routes">
      <h2>{{ route.name }}</h2>
      <h2>{{ route.distance }}</h2>
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