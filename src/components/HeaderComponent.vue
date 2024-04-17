<template>
   <input v-model="endPoint" 
           type="radio" 
           value="search/movie" 
           name="category" /> 
    <label for="">Movies</label> 
    <input v-model="endPoint" 
           type="radio" 
           value="search/tv" 
           name="category" /> 
    <label for="">Tv show</label> 
    <input v-model="endPoint"
             type="radio"
             value="search/multi"
             name="category" /> 
    <label for="">All</label> 
    <button>search</button>
</template>

<script>
    export default {
        name: 'HeaderComponent',

        methods: {
            created(){
                console.log('hello')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>