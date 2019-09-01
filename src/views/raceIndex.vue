<template>
  <div class="Races">
    <h1>{{ message }}</h1>
    <div class="searchBar">
      <p>Search: <input type="text" v-model="searchTerm" list="names"></p>
      <datalist id="names">
      <option v-for="race in races">{{race.name}}</option>
      </datalist>
    </div>
    <div class="countryDropdown">
      <select v-model="selectedCountry">
        <option disabled value="">Countries</option>
        <option value="">Clear Selected</option>
        <option v-for="race in raceCountries">
          {{ race.country }}
        </option>
      </select>
    </div>
    <div v-for="race in filterBy(filterBy(races, selectedCountry, 'country'),searchTerm, 'name')">
      <h2>Name: {{ race.name }}</h2>
      <p>Date: {{ race.start_date_time }}</p>
      <p>Distance: {{ race.distance }}</p>
      <p>City: {{ race.city }}</p>
      <p v-if="race.state !== ''" >State: {{ race.state }}</p>
      <p>Country: {{ race.country }}</p>
      <hr>
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
      message: "2019 Races",
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