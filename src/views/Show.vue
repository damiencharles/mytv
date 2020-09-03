<template>
  <div class="container">
    <h1 class="text-center mt-5 mb-3">{{show.name}} </h1>
  <div class="text-center">
    <span class="badge badge-dark text-white mx-2 p-2"
    v-for="(genre , index) in show.genres"
    :key="index">
    {{ genre }}


    </span>
  </div>
    

   

  <div class="row mt-5">
    <div class="col-6 ">
      <img :src="show.image.original" :alt="show.name" class="img-fluid">
    </div>

    <div class="col-6 bg-light p-5">
      <h2 class="font-weight-bold">Résumé</h2>
      <span v-html="show.summary"></span>
      <p>Diffusé sur <b>{{show.network.name}}</b></p>
      <p>Première diffusion le <b>{{show.premiered}}</b></p>
      <div class="row my-5 d-flex flex-column">
          <div class="mt-2 text-center">
            <button class="btn text-white" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Acteurs
            </button>
          <div>
            <router-link v-if="show.type == 'Scripted'" class="btn text-white mt-2" :to="{ name: 'Episodes', params: {id: show.id}}">Liste des épisodes</router-link>
          </div>
          <div>
            <router-link class="btn text-white mt-2" to="/">Retour</router-link>
          </div>
        </div>
      </div>
      
    </div>
    </div>


    <div class="row collapse mt-5" id="collapseExample">
        <div class="col-12 text-center " >
                    <h3>Liste des acteurs et personnages</h3>

        </div>

        <div class="col-2 text-center bg-light mt-5 p-2" 
          v-for="(acteur, index) in show._embedded.cast"
          :key = "index">
          <router-link  :to="{ name: 'Acteurs', params: {id: acteur.person.id}}" ><img :src="acteur.person.image.medium" class="img-fluid"></router-link>
          <p class="mt-2 font-weight-bold">{{acteur.person.name}}</p>
          <p><img :src="acteur.character.image.medium" class="img-thumbnail w-25"><br><i>{{acteur.character.name}}</i></p>
          </div>
      </div>
    
  

   
    <div class="row">
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Show',
  components: {
  },
data: function(){
    return {
      id: this.$route.params.id,
      show: [],
    }
  },
 mounted () {

      axios
        .get('http://api.tvmaze.com/shows/'+ this.id +'?embed=cast')
        .then(response => (this.show = response.data))

    
  },

}
</script>

