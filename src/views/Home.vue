<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>Routes</h2>
      <router-link to="/routes">Routes</router-link>
    <h2>Shoes</h2>
    <router-link to="/shoes">Shoes</router-link>
    <!-- <div id="map"></div> -->
   <!--  <p><a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a></p> -->
  </div>
</template>

<style>
/*#map {/*position: relative;*/
      /*height: 456px;*/
   /*   display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }*/
</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to the Running App!"

    };
  },
  created: function() {
    console.log(process.env.VUE_APP_MY_API_KEY);
  },
  mounted: function() {
    mapboxgl.setRTLTextPlugin('https://cdn.maptiler.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.2/mapbox-gl-rtl-text.js');
    var map = new mapboxgl.Map({
    container: 'map',
      // style: 'https://api.maptiler.com/maps/streets/style.json?key=<%- process.env.VUE_APP_MY_API_KEY %>',
      // center: [-0, 0],
      // zoom: 0
    });
  },
  methods: {}
};
</script>
