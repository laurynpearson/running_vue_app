<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="shoe in shoes">
      <h2>id: {{ shoe.id }}</h2>
      <h2>Shoe Name: {{ shoe.description }}</h2>
      <p>Mileage: {{ shoe.mileage }}</p>
      <p>Active: {{ shoe.active }}</p>
      <button v-on:click="setActive(true, shoe)">Active</button>
      <button v-on:click="setActive(false, shoe)">Not Active</button>
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
      shoes: [],
      shoe: {}     
    };
  },
  created: function() {
    axios.get('/api/shoes').then(response =>{
      this.shoes = response.data;
    });
  },
  methods: {
    setActive: function(status, shoe) {
      console.log(status);
      console.log(shoe);
      var params = {
        active: shoe.active
      };
      console.log(params);
      console.log(shoe.active = status);
      axios.patch('/api/shoes/' + shoe.id, params).then(response => {
        console.log('update active status');
        console.log(response.data);
        shoe.active = status;
        console.log(shoe.active);
      });
    }
  }
};
</script>