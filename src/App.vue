<template>
  <div id="app">
    <div id="page">
    <nav class="fh5co-nav" role="navigation">
      <div class="top">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 text-right">
              <p class="num"> </p>
            </div>
          </div>
        </div>
      </div>
      <div class="top-menu">
        <div class="container">
          <div class="row">
            <div class="col-xs-2">
              <div id="fh5co-logo"><a href='/'>Run<span>.</span></a></div>
            </div>
            <div class="col-xs-10 text-right menu-1">
              <ul>
                <li class="active"><a href='/'>Home</a></li>
                <li><a href='/routes'>Routes</a></li>
                <li><a href='/shoes'>Shoes</a></li>
                <li><a href='/urs'>Routes I've Run</a></li>
                <li><a href='/login'>Login/Signup</a></li>
                <li><a href='/logout'>Log Out</a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </nav>

  <router-view/>
  <!-- <footer id="fh5co-footer" class="fh5co-bg" style="background-image: url(images/img_bg_1.jpg);" role="contentinfo">
    <div class="overlay"></div>
    <div class="container">
      

      <div class="row copyright">
        <div class="col-md-12 text-center">
          <p>
            <small class="block">&copy; 2016 Free HTML5. All Rights Reserved.</small> 
            <small class="block">Designed by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a></small>
          </p>
          <p>
            <ul class="fh5co-social-icons">
              <li><a href="#"><i class="icon-twitter"></i></a></li>
              <li><a href="#"><i class="icon-facebook"></i></a></li>
              <li><a href="#"><i class="icon-linkedin"></i></a></li>
              <li><a href="#"><i class="icon-dribbble"></i></a></li>
            </ul>
          </p>
        </div>
      </div>

    </div>
  </footer> -->
  </div>
</div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
