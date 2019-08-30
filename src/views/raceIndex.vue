<template>
  <div class="Races">
    <h1>{{ message }}</h1>
    <p>Search: <input type="text" v-model="searchTerm"></p>
    <div v-for="race in filterBy(races, searchTerm, 'start_date_time')">
      <h2>Name: {{ race.name }}</h2>
      <h2>Date: {{ race.start_date_time }}</h2>
      <h2>Distance: {{ race.distance }}</h2>
      <h2>City: {{ race.city }}</h2>
      <h2>State: {{ race.state }}</h2>
      <h2>Country: {{ race.country }}</h2>
      <hr>
    </div>
  </div>
</template>
<style>
</style>

<script>
import axios from 'axios';
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Welcome to the Races!",
      races: [],
      searchTerm: ""
    };
  },
  created: function() {
    axios.get('/api/races').then(response => {
      this.races = response.data;
    });
  },
  methods: {}
};
</script>