<template>
  <div>
    <h1>hello Vue</h1>
    <HeaderComponent/>
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
        this.store.movies = res.data.results;
        console.log(this.store.allMedia);
      })
    }
  },

  mounted() {
    console.log('ciao');
  },
  created() {
   this.getTv(); 
    console.log('ciao')
  }
}

</script>

<style lang="scss" scoped></style>
