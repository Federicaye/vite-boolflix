<template>
  <div>
    <HeaderComponent @findMedia="getMedia()"  @findMediaByGenre="getMediaFilteredByGenre()"/>
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
   /*  getMediaByGenre() {
      axios.get(this.store.apiUrl + this.store.endPoints.discoverMovie, {
        params: {
          api_key: '21799a6b0925c3f753aa0f6bbb689d8c',
          with_genres: 28,
        }
      }).then((res) => {
        this.store.genreAction = res.data.results;

      })
    }, */

    getMediaByGenre() {
      const promiseArray = this.store.genreId.map((el) => {
        return axios.get(this.store.apiUrl + this.store.endPoints.discoverMovie, {
          params: {
            api_key: '21799a6b0925c3f753aa0f6bbb689d8c',
            with_genres: el
          }
        })
      });
      Promise.all(promiseArray).then((res) => {
        this.store.genreAction = res;
        console.log(this.store.genreAction);
        /**
         * per accedere ai singoli array this.store.genreAction[indice].data.results
         */
      });
    }
    
    },

  mounted() {
    
  },
  created() {
    this.getMediaByGenre();
  }
}

</script>

<style lang="scss" scoped></style>
