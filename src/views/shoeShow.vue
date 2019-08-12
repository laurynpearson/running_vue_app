<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <h2>Description: {{ shoe.description }}</h2>
      <h2>Mileage: {{ shoe.mileage }}</h2>
      <h2>Active: {{ shoe.active }}</h2>
      <h2>Year Purchased: {{ shoe.year_purchased }}</h2>
      <p><router-link v-bind:to="'/shoes/' + shoe.id + '/edit'" tag="button">Edit Shoe Info</router-link></p>
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
      message: "Welcome to Shoe Show!",
      shoe: {}
    };
  },
  created: function() {
    console.log('in the create)');
    axios.get('/api/shoes/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.shoe = response.data;
    });
  },
  methods: {}
};
</script>