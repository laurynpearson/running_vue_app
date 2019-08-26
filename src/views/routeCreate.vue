<template>
  <div class="create">
    <h1>{{ message }}</h1>
    <div>
      <p>Name: <input type="text" v-model="newRouteName"></p>
      <p>City: <input type="text" v-model="newRouteCity"></p>
      <p>Distance: <input type="text" v-model="newRouteDistance"></p>
      <p>Duration: <input type="text" v-model="newRouteDuration"></p>
      <button v-on:click="createRoute()">Create Route</button>
    </div>
    <div id='map'></div>
    <div id='distance' class='distance-container'></div>
  </div>
  
</template>
<style>
body { 
    margin:0;
    padding:0;
  }
  #map { 
    position:absolute;
    top:0;
    bottom:0;
    width:100%;
  }
  .distance-container {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
  }
  .distance-container > * {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 11px;
    line-height: 18px;
    display: block;
    margin: 0;
    padding: 5px 10px;
    border-radius: 3px;
  }
</style>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      message: "Welcome to the create route page!!",
      newRouteName: "",
      newRouteCity: "",
      newRouteDistance: "",
      newRouteDuration: ""
    };

  },
  created: function() {},
  mounted: function() {
    mapboxgl.accessToken = 'accessToken';
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-79.4512, 43.6568], // starting position [lng, lat]
      zoom: 13 // starting zoom
    });

    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    var distanceContainer = document.getElementById('distance');
   
      // GeoJSON object to hold our measurement features
      var geojson = {
        "type": "FeatureCollection",
        "features": []
      };
       
      // Used to draw a line between points
      var linestring = {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": []
        }
      };
      map.on('load', function() {
        map.addSource('geojson', {
          "type": "geojson",
          "data": geojson
        });
        // Add styles to the map
        map.addLayer({
          id: 'measure-points',
          type: 'circle',
          source: 'geojson',
          paint: {
            'circle-radius': 5,
            'circle-color': '#000'
          },
          filter: ['in', '$type', 'Point']
        });
        map.addLayer({
          id: 'measure-lines',
          type: 'line',
          source: 'geojson',
          layout: {
            'line-cap': 'round',
            'line-join': 'round'
          },
          paint: {
            'line-color': '#000',
            'line-width': 2.5
          },
          filter: ['in', '$type', 'LineString']
        });
        map.on('click', function(e) {
          var features = map.queryRenderedFeatures(e.point, { layers: ['measure-points'] 
          });
        // Remove the linestring from the group
       // So we can redraw it based on the points collection
          if (geojson.features.length > 1) geojson.features.pop();
     
       // Clear the Distance container to populate it with a new value
          distanceContainer.innerHTML = '';
       // If a feature was clicked, remove it from the map
          if (features.length) {
            var id = features[0].properties.id;
            geojson.features = geojson.features.filter(function(point) {
              return point.properties.id !== id;
            });
          } else {
            var point = {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  e.lngLat.lng,
                  e.lngLat.lat
                ]
              },
              "properties": {
                "id": String(new Date().getTime())
              }
            };
            geojson.features.push(point);
          }
          if (geojson.features.length > 1) {
            linestring.geometry.coordinates = geojson.features.map(function(point) {
              return point.geometry.coordinates;
            });
             
            geojson.features.push(linestring);
            console.log(geojson.features);
         
        // Populate the distanceContainer with total distance
            var value = document.createElement('pre');
            value.textContent = 'Total distance: ' + turf.lineDistance(linestring).toLocaleString() + 'km';
            distanceContainer.appendChild(value);
          }
          map.getSource('geojson').setData(geojson);
        });
      });
       
      map.on('mousemove', function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: ['measure-points'] });
      // UI indicator for clicking/hovering a point on the map
        map.getCanvas().style.cursor = (features.length) ? 'pointer' : 'crosshair';
      });
    },

  methods: {
    createRoute: function() {
      console.log('in create route');
      var newRoute = {
        name: this.newRouteName,
        city: this.newRouteCity,
        distance: this.newRouteDistance,
        duration: this.newRouteDuration
      };
      axios.post('/api/routes', newRoute).then(response => {
        console.log('in the callback for create');
        console.log(response.data);
        this.$router.push('/routes');
      });
    },
  }
};
</script>