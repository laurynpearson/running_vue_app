<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <p>Name: <input type="text" v-model ="newShoeDescription"></p>
      <p>Mileage: <input type="text" v-model ="newShoeMileage"></p>
      <p>Active: <input type="text" v-model ="newShoeActive"></p>
      <button v-on:click="createShoe()">Create Shoe</button>
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
      message: "Welcome to create shoe!",
      newShoeDescription: "",
      newShoeMileage: "",
      newShoeActive: ""
    };
  },
  created: function() {},
  methods: {
    createShoe: function() {
      console.log('in create shoe');
      var newShoe = {
        description: this.newShoeDescription,
        mileage: this.newShoeMileage,
        active: this.newShoeActive
      };
      axios.post('/api/shoes', newShoe).then(response => {
        console.log('in the callback for create');
        console.log(response.data);
        this.$router.push('/shoes');
      });
    }
  }
};
</script>