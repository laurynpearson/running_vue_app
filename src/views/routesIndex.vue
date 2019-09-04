<template>
  <div class="home">
    <div class="content">
      <h1>{{ message }}</h1>
      <p><router-link v-bind:to="'/routes/new'" tag="button">Create New Route</router-link></p>
      <div v-for="route in routes">
        <h2>Route Name: {{ route.name }}</h2>
        <h3>Distance: {{ route.distance }}</h3>
        <p><router-link v-bind:to="'/routes/' + route.id">View this Route</router-link></p>
        <hr>
      </div>
    </div>
  </div>
</template>

<style>
.home {
  /*margin-top: 100px;*/
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Routes",
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