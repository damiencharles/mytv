<template>
    <div class="container"> 
        
            <h1 class="text-center my-5">{{people.name}}</h1>
        
            <div class="row mb-4">
                <div class="col-6 text-center">
                    <img :src="people.image.original" :alt="people.name" class="img-fluid">
                </div>

                <div class="col-6 font-weight-bold">
                    <span v-if="people.gender =='Female'"> Née le  {{people.birthday}}</span>
                    <span v-else> Né le  {{people.birthday}}</span>
                    <p>Pays d'origine : {{people.country.name}}</p>
                    <h2>Apparitions</h2>

                    <div class="row text-center bg-light p-4">
                        
                        <div class="col-4 my-3"
                        v-for="(credit, index) in credits"
                            :key="index"
                        >
                        
                        <div>
                            <router-link  :to="{ name: 'Show', params: {id: credit._embedded.show.id}}" class="text-decoration-none">
                                <img :src="credit._embedded.show.image.medium" alt="" class="img-fluid"> </router-link>
                        </div>
                        <h5 class="mt-2">{{credit._embedded.show.name}}</h5>
                        
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
  name: 'Acteurs',
  components: {
  },
data: function(){
    return {
      id: this.$route.params.id,
      people: [],
      credits: [],
    }
  },
 mounted () {

      axios
        .get('http://api.tvmaze.com/people/'+ this.id)
        .then(response => (this.people = response.data))

    axios
        .get ('http://api.tvmaze.com/people/'+this.id+'/castcredits?embed=show')
        .then(response => (this.credits= response.data))

    
  },

}
</script>