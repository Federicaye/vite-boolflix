<template>
    <header class="d-flex justify-content-between align-items-center">
        <h2>film score</h2>
        <div class="filter">
            <input v-model="store.endPoint" type="radio" value="search/movie" name="category" />
            <label for="">Movies</label>
            <input v-model="store.endPoint" type="radio" value="search/tv" name="category" />
            <label for="">Tv show</label>
            <input v-model="store.endPoint" type="radio" value="search/multi" name="category" />
            <label for="">All</label>
            <input type="text" v-model.trim="store.options.params.query">
            <button @click="$emit('findMedia')">search</button>
        </div>
    </header>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
        }
    },

    methods: {
        created() {
            console.log('hello')
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    background-color: rgb(72, 100, 128);
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 2000;
    height: 50px;
    color: white;
}

.filter {
    padding: 20px;
}
</style>