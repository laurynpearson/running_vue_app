<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <h2>Name: {{ race.name }}</h2>
      <h2>Date: {{ race.start_date_time }}</h2>
      <h2>Distance: {{ race.distance }}</h2>
      <h2>City: {{ race.city }}</h2>
      <h2>State: {{ race.state }}</h2>
      <h2>Country: {{ race.country }}</h2>
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
      message: "Welcome to Race Show!",
      shoe: {}
    };
  },
  created: function() {
    console.log('in the create)');
    axios.get('/api/races/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.race = response.data;
    });
  },
  methods: {}
};
</script>