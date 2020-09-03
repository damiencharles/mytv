<template>
    
      <div class="container d-flex flex-column justify-content-center align-items-center">
         
        <span class="font-weight-bold mt-5">Chercher un film ou une série</span>
        <input type="text" class="form-control w-50 mt-2" v-model="query">
        <a href="#results"><i class="fas fa-arrow-circle-down text-white btn mt-2"></i></a>
        
         


  <div class="row">
  
      <div
        class="col-12 mt-4" id="results"
        v-for="(result, index) in results"
        :key="index"
        >

        <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4 my-auto text-center">
     <img class="img-fluid" :src='result.show.image.medium'>
    </div>
    <div class="col-md-8 bg-light">
      <div class="card-body">
        <h5 class="card-title">{{ result.show.name }}</h5>
        <router-link :to="{ name: 'Show', params: {id: result.show.id}}" class="text-decoration-none">
              <p class="lien">En savoir plus</p> 
              </router-link>
              <span
                class="badge badge-dark text-white mx-2 mb-5 p-2"
                v-for="(genre , index) in result.show.genres"
                :key="index">
                {{ genre }}
                </span>
        <p class="card-text" v-html="result.show.summary"></p>
      </div>
    </div>
  </div>
</div>
       </div> 
      </div>

      </div>
   
</template>


<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  components: {
  },
data: function(){
    return {
      query:'',
      results: [],
      episodes: [],
    }
  },
  watch: {
    query: function(){
      axios
        .get('http://api.tvmaze.com/search/shows?q='+ this.query)
        .then(response => (this.results = response.data))

    }
  },

}
</script>

<style >

.badge {
  background-color: lightcoral ;
}
.btn {
  background-color: lightskyblue;
}
</style>