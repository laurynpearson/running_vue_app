<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="shoe in shoes">
      <h2>Shoe Name: {{ shoe.description }}</h2>
      <p>Mileage: {{ shoe.mileage }}</p>
      <p>Active: {{ shoe.active }}</p>
      <p><router-link v-bind:to="/shoes/ + shoe.id" tag="button">Show More Information</router-link></p>
      <p><router-link v-bind:to="'/shoes/' + shoe.id + '/edit'" tag="button">Edit Shoe Info</router-link></p>
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
      message: "Welcome to Shoe Index!",
      shoes: []
    };
  },
  created: function() {
    axios.get('/api/shoes').then(response =>{
      this.shoes = response.data;
    });
  },
  methods: {}
};
</script>