<template>
  <div class="create">
    <h1>{{ message }}</h1>
    <div>
      <p>Name: <input type="text" v-model="newRouteName"></p>
      <p>City: <input type="text" v-model="newRouteCity"></p>
      <p>Distance: <input type="text" v-model="newRouteDistance"></p>
      <p>Duration: <input type="text" v-model="newRouteDuration"></p>
      <button v-on:click="createRoute()">Create Route</button>
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
      message: "Welcome to the create route page!!",
      newRouteName: "",
      newRouteCity: "",
      newRouteDistance: "",
      newRouteDuration: ""
    };
  },
  created: function() {},
  methods: {
    createRoute: function() {
      console.log('in create route');
      var newRoute = {
        name: this.newRouteName,
        city: this.newRouteCity,
        distance: this.newRouteDistance,
        duration: this.newRouteDuration
      };
      axios.post('/api/routes', newRoute).then(response => {
        console.log('in the callback for create');
        console.log(response.data);
        this.$router.push('/routes');
      });
    }
  }
};
</script>