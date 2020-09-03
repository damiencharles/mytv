<template>
    <div class="container"> 

        <h1 class="text-center my-4">Episodes</h1> 

       <div class="row mt-5">

 <div class="col-sm-12 col-md-6 col-lg-3"
    v-for="(episode, index) in episodes"
    v-bind:key="index"
    >
    <h4 class="font-weight-bold text-center">{{ episode.name }}</h4>
    <p class="text-center light"><b>Saison {{episode.season}} </b>- Episode {{episode.number}}</p>
     
    <img :src="episode.image.medium">
      
    <p class="text-justify bg-light p-2" v-html="episode.summary"></p>
      </div>
       </div>

   
    
    </div>

</template>

<script>
import axios from 'axios'

export default {
    name : 'Episodes',
    data: function() {
        return {
            episodes : [],
            saisons: []
        }
    },
    mounted: function(){
       axios
            .get('http://api.tvmaze.com/shows/'+this.$route.params.id+'/episodes')
            .then(response => (this.episodes= response.data))

    }
}
    
</script>
	
	
	
