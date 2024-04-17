<template>
   <input v-model="store.endPoint" 
           type="radio" 
           value="search/movie" checked
           name="category" /> 
    <label for="">Movies</label> 
    <input v-model="store.endPoint" 
           type="radio" 
           value="search/tv" 
           name="category" /> 
    <label for="">Tv show</label> 
    <input v-model="store.endPoint"
             type="radio"
             value="search/multi"
             name="category" /> 
    <label for="">All</label> 
    <input type="text" v-model="store.options.params.query">
    <button @click="$emit('findMedia')">search</button>
</template>

<script>
import { store } from '../store.js';
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                store,
            }
        },

        methods: {
            created(){
                console.log('hello')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>