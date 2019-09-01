<template>
  <div class="Races">
    <h1>{{ message }}</h1>
    <p>Search: <input type="text" v-model="searchTerm" list="names"></p>
    <select v-model="selectedCountry">
      <option disabled value="">Please select one</option>
      <option value="">All</option>
      <option v-for="race in raceCountries">
        {{ race.country }}
      </option>
    </select>
    <span>Selected: {{ selectedCountry }}</span>
    <datalist id="names">
      <option v-for="race in races">{{race.name}}</option>
    </datalist>
    <!-- <div v-for="race in filterBy(races, searchTerm, 'name')"> -->
    <div v-for="race in filterBy(races, selectedCountry, 'country')">
      <h2>Name: {{ race.name }}</h2>
      <p>Date: {{ race.start_date_time }}</p>
      <p>Distance: {{ race.distance }}</p>
      <p>City: {{ race.city }}</p>
      <p>State: {{ race.state }}</p>
      <p>Country: {{ race.country }}</p>
      <hr>
    <!-- </div> -->
    </div>
  </div>
</template>
<style>
</style>

<script>
import axios from 'axios';
import Vue2Filters from "vue2-filters";
import uniqBy from 'lodash/uniqBy';
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Welcome to the Races!",
      races: [],
      searchTerm: "",
      sortAttribute: "name",
      selectedCountry: ""
    };
  },
  created: function() {
    axios.get('/api/races').then(response => {
      this.races = response.data;
    });
  },
  computed: {
    raceCountries() {
      return uniqBy(this.races, 'country');
    }
  },
  methods: {
    setSortAttribute: function(attribute) {
      console.log(attribute);
      this.setSortAttribute = attribute;
    }
  }
};
</script>