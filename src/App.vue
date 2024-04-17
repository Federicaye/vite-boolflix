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
        axios.get(this.store.apiUrl + this.store.endPoints.tv,  this.store.options ).then((res) => {
      this.store.tvShow = res.data.results;
      console.log(this.store.tvShow)
      })
    },
    created(){
      this.getTv()
    }
  }}
</script>

<style lang="scss" scoped>

</style>
