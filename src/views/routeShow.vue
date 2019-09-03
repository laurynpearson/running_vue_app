<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <h2>City: {{route.city}}</h2>
      <h2>Distance: {{route.distance}}</h2>
      <h2>Description: {{route.name}}</h2>
      <div id="shoes">
        <button v-on:click="viewShoe(shoe)">View Shoes</button>
        <div v-if="currentShoe === shoe">
          <div v-for="shoe in shoes">
          <h2>ID: {{ shoe.id }}</h2>
          <h2>Shoe Name: {{ shoe.description }}</h2>
          <p>Mileage: {{ shoe.mileage }}</p>
          <p>Active: {{ shoe.active }}</p>
          <button v-on:click="selectShoe(shoe)">Select Shoe and Run!</button>
          </div>
        </div>
      </div>
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
      message: "Welcome to Route Show!",
      route: {},
      urs: {},
      shoe: {},
      shoes: [],
      currentShoe: {}
    };
  },
  created: function() {
    axios.get('/api/routes/' + this.$route.params.id).then(response => {
      this.route = response.data;
    });
    axios.get('/api/shoes').then(response =>{
      this.shoes = response.data;
    });
  },
  mounted: function() {
  },
  methods: {
    viewShoe: function(shoe) {
      if (this.currentShoe === shoe) {
        this.currentShoe = {};
      } else {
        this.currentShoe = shoe;
      }
      console.log('you clicked the run route');
    },
    selectShoe: function(shoe) {
      console.log('in the select shoe');
      console.log(shoe);
      console.log(this.$route.params.id);
      var params = {
        route_id: this.$route.params.id,
        shoe_id: shoe.id
      };
      axios.post('/api/urs', params).then(response => {
        console.log('created the urs');
        this.$router.push('/');
      });
    }
  }
};
</script>