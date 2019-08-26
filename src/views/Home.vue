<template>
  <div class="home">
  <header id="fh5co-header" class="fh5co-cover" role="banner" style="background-image:url(images/img_bg_2.jpg);" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center">
          <div class="display-t">
            <div class="display-tc animate-box" data-animate-effect="fadeIn">
              <h1>Running</h1>
              <!-- <h2>Free html5 templates Made by <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></h2> -->
              <!-- <p><a href="https://vimeo.com/channels/staffpicks/93951774" class="btn btn-primary popup-vimeo">Watch Our Video</a></p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
    <div id="fh5co-services" class="fh5co-bg-section">
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-center animate-box">
            <div class="services">
              <span><img class="img-responsive" src="images/running-shoe.svg" alt=""></span>
              <h3>Routes</h3>
              <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius</p>
              <p><a href="/routes" class="btn btn-primary btn-outline btn-sm">More <i class="icon-arrow-right"></i></a></p>
            </div>
          </div>
          <div class="col-md-4 text-center animate-box">
            <div class="services">
              <span><img class="img-responsive" src="images/exercise.svg" alt=""></span>
              <h3>Shoes</h3>
              <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius</p>
              <p><a href="/shoes" class="btn btn-primary btn-outline btn-sm">More <i class="icon-arrow-right"></i></a></p>
            </div>
          </div>
          <div class="col-md-4 text-center animate-box">
            <div class="services">
              <span><img class="img-responsive" src="images/yoga-carpet.svg" alt=""></span>
              <h3>Create a Route</h3>
              <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius</p>
              <p><a href="/routes/new" class="btn btn-primary btn-outline btn-sm">More <i class="icon-arrow-right"></i></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <h1>{{ message }}</h1>
    <h2>Routes</h2>
      <router-link to="/routes">Routes</router-link>
    <h2>Shoes</h2>
    <router-link to="/shoes">Shoes</router-link> -->
    <!-- <div id="map"></div>
    <p><a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a></p> -->
  </div>
</template>

<style>

</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to the Running App!"

    };
  },
  created: function() {},
  methods: {}
};
</script>
