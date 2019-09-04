<template>
  <div class="URS-index">
    <h1>{{ message }}</h1>
    <div v-for="userroutesshoe in userrouteshoes">
      <h2>Route Name: {{userroutesshoe.route_name}}</h2>
      <h3>City: {{userroutesshoe.route_city}}</h3>
      <h3>Distance: {{userroutesshoe.route_distance}}</h3>
      <h3>Shoe: {{userroutesshoe.shoe_description}}</h3>
      <hr>
    </div>
  </div>
</template>
<style>
.URS-index {
  /*margin-top: 100px;*/
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
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