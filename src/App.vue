<template>
  <div id="app">
    <div class="banner">
      <div class="text-left p-5">
        <router-link class="h1 text-white logo p-2" to="/">Aformac TV</router-link>

      </div>
    </div>

    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:rgb(43, 42, 42);

}

.banner {
  height: 75vh;
  background-image: url(https://source.unsplash.com/yubCnXAA3H8);
  background-size: cover;
  background-position: center;
}

.logo {
  font-family: 'Bangers', cursive;
  
}


.lien {
  color: lightskyblue;
  text-decoration: none !important;
}

.lien:hover {
  color: lightblue
}

.light {
color: lightcoral;
}

.img-fluid:hover{
  opacity: 0.8;
}
</style>
