<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <h2>City: {{route.city}}</h2>
      <h2>Distance: {{route.distance}}</h2>
      <h2>Description: {{route.name}}</h2>
      
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
      route: {}
    };
  },
  created: function() {
    axios.get('/api/routes/' + this.$route.params.id).then(response => {
      this.route = response.data;
    });
  },
  methods: {
    getURS: function(urs) {
      console.log('you clicked the buton');
      axios.post('/api/urs/' + this.urs.id, this.urs).then(response => {
        console.log('created the urs');
        this.$router.push('/urs');
      });
    }
  }
};
</script>