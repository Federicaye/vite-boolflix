<template>
  <div>
    <HeaderComponent @findMedia="getMedia()" />
    <MainComponent />
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
    /* RICERCA DELL'UTENTE */
    getMedia() {
      if (this.store.options.params.query) {
        axios.get(this.store.apiUrl + this.store.endPoint, this.store.options).then((res) => {
          this.store.findMedia = res.data.results;
          console.log(this.store.tvShow);
        })
      }
    },
    getTv() {
      axios.get(this.store.apiUrl + this.store.endPoints.tv, this.store.options).then((res) => {
        this.store.tvShow = res.data.results;
        console.log(this.store.tvShow);
      })
    },
    getMovie() {
      axios.get(this.store.apiUrl + this.store.endPoints.movie, this.store.options).then((res) => {
        this.store.movies = res.data.results;
        console.log(this.store.movies);
      })
    },
    getMovieTvShow() {
      axios.get(this.store.apiUrlMulti, this.store.options).then((res) => {
        this.store.allMedia = res.data.results;
        console.log(this.store.allMedia);
      })
    },
    getMediaFilteredByGenre() {
      axios.get(this.store.apiUrl + this.store.endPoints.discoverMovie, this.store.optionsFilter).then((res) => {
        this.store.genre = res.data.results;

      })
    },
    getMediaByGenre() {
      axios.get(this.store.apiUrl + this.store.endPoints.discoverMovie, {
        params: {
          api_key: '21799a6b0925c3f753aa0f6bbb689d8c',
          with_genres: this.store.genreId[0],
        }
      }).then((res) => {
        this.store.genre = res.data.results;

      })
    },

    /* METODO PER PRENDERE ARRAY DEI GENERI DI FILM  */

    getAllGenre() {
      this.store.genreId.forEach((gId) => {
        axios.get(this.store.apiUrl + this.store.endPoints.discoverMovie, {
          params: {
            with_genres: gId,
            api_key: '21799a6b0925c3f753aa0f6bbb689d8c'
          }
        }).then((res) => this.store.filmByGenre[gId] = res.data.results)
      })
    }
  },

  mounted() {
   /*  this.getMediaByGenre(); */
    this.getAllGenre()
  },
  created() {

  }
}

</script>

<style lang="scss" scoped></style>
