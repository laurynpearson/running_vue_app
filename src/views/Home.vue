<template>
  <div class="home">
  <header id="fh5co-header" class="fh5co-cover" role="banner" style="background-image:url(images/img_bg_2.jpg);" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center">
          <div class="display-t">
            <div class="display-tc animate-box" data-animate-effect="fadeIn">
              <h1>Who Run the World?</h1>
              <h1>YOU</h1>
              <p><a href="/login" class="btn btn-primary">Login/Sign Up</a></p>
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
              <span><img class="img-responsive" src="images/road.svg" alt=""></span>
              <h3>Routes</h3>
              <p>Use our list to choose a route or create your own.</p>
              <p><a href="/routes" class="btn btn-primary btn-outline btn-sm">More <i class="icon-arrow-right"></i></a></p>
            </div>
          </div>
          <div class="col-md-4 text-center animate-box">
            <div class="services">
              <span><img class="img-responsive" src="images/running-shoe.svg" alt=""></span>
              <h3>Shoes</h3>
              <p>Keep track of the mileage on your shoes.</p>
              <p><a href="/shoes" class="btn btn-primary btn-outline btn-sm">More <i class="icon-arrow-right"></i></a></p>
            </div>
          </div>
          <div class="col-md-4 text-center animate-box">
            <div class="services">
              <span><img class="img-responsive" src="images/earth-globe.svg" alt=""></span>
              <h3>Find a Race</h3>
              <p>Start planning out your next race!</p>
              <p><a href="/races" class="btn btn-primary btn-outline btn-sm">More <i class="icon-arrow-right"></i></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
