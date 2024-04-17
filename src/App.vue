<template>
  <div>
<h1>hello</h1>
  </div>
</template>

<script>
import {store} from './store.js';
import axios from 'axios';
  export default {
    name: 'App',
    data(){
      return {
        store,
      }
    },
    methods: {
      getTv(){
        axios.get(this.store.endPoints.apiUrl + this.store.endPoints.movie, {params: this.store.options.params }).then((res) => 
      this.store.tvShow = res.data);
      console.log(this.store.tvShow)
      }
    },
    created(){
      this.getTv()
    }
  }
</script>

<style lang="scss" scoped>

</style>
