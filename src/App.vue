<template>
  <div>
    <h1>Rotten tomatoes</h1>
    <HeaderComponent  @findMedia="getMedia()"/>
    <MainComponent/>
  </div>
</template>

<script>
import { store } from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  components: {
    HeaderComponent,
    MainComponent
  },
  methods: {
    getMedia() {
      axios.get(this.store.apiUrl + this.store.endPoint, this.store.options).then((res) => {
        this.store.tvShow = res.data.results;
        console.log(this.store.tvShow);
      })
    },
    getTv() {
      axios.get(this.store.apiUrl + this.store.endPoints.tv, this.store.options).then((res) => {
        this.store.tvShow = res.data.results;
        console.log(this.store.tvShow);
      })
    },
    getMovie(){
      axios.get(this.store.apiUrl + this.store.endPoints.movie, this.store.options).then((res) => {
        this.store.movies = res.data.results;
        console.log(this.store.movies);
      })
    },
    getMovieTvShow(){
      axios.get(this.store.apiUrlMulti, this.store.options).then((res) => {
        this.store.allMedia = res.data.results;
        console.log(this.store.allMedia);
      })
    }
  },

  mounted() {
    this.getMedia(); 
    console.log('ciao');
  },
  created() {
   console.log('ciao')
  }
}

</script>

<style lang="scss" scoped></style>
