<template>
  <div class="URS index">
    <h1>{{ message }}</h1>
    <div v-for="userroutesshoe in userrouteshoes">
      <p>Route Name: {{userroutesshoe.route_name}}</p>
      <p>City: {{userroutesshoe.route_city}}</p>
      <p>Distance: {{userroutesshoe.route_distance}}</p>
      <p>Shoe: {{userroutesshoe.shoe_description}}</p>
      <hr>
    </div>
  </div>
</template>
<style>
</style>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      message: "Routes I've Run",
      userrouteshoes: []
    };
  },
  created: function() {
    axios.get('/api/urs').then(response => {
      this.userrouteshoes = response.data;
      console.log(response.data);
    });
  },
  methods: {}
};
</script>