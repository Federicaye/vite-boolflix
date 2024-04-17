<template>
    <div class="cardGallery container">
        <div v-for="(item, index) in store.tvShow" :key="index" class="cardMedia">
            <CardComponent :title="item.original_name" :titleOriginal="item.name" :title2="item.original_title" :titleOriginal2="item.title" 
            :vote="item.vote_average" :country="item.origin_country" :img="`http://image.tmdb.org/t/p/w342/${item.poster_path}`"/>
        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { store } from '../store.js';
export default {
    name: 'MainComponent',
    components: { CardComponent },
    data() {
        return {
            store,

        }
    }
}
</script>

<style lang="scss" scoped>
.cardMedia {
    padding: 10px;
    color: white;
    display: flex;

}

.cardGallery {
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
}
</style>