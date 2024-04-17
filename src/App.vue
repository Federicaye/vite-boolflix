<template>
  <div>
    <h1>hello Vue</h1>
    <HeaderComponent />
  </div>
</template>

<script>
import { store } from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  components: {
    HeaderComponent,
  },
  methods: {
    getTv() {
      axios.get(this.store.apiUrl + this.store.endPoints.tv, this.store.options).then((res) => {
        this.store.tvShow = res.data.results;
        console.log(this.store.tvShow);
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
