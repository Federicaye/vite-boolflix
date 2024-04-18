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
        <div>
            <select name="" id="" v-model="store.optionsFilter.params.with_genres">
                <option value="28">Action</option>
                <option value="12">Adventure</option>
                <option value="80">Crime</option>
                <option value="27">Horror</option>
                <option value="53">Thriller</option>
                <option value="37">Western</option>
                <option value="878">Science Fiction</option>
                <option value="10749">Romance</option>
                <option value="36">History</option>
                <option value="10402">Music</option>
            </select>
            <button @click="$emit('findMediaByGenre')" >find by genre</button>
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