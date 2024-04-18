<template>
    <div class="gallery">
        <div class="cardGallery container">
            <cardListOrizontal :title="store.optionsFilter.params.with_genres" :list="store.genre" />
            
            <CardList :title="`risultati della ricerca per ${store.options.params.query}`" :list="store.findMedia" />
            <cardListOrizontal title="Action" :list="store.genreAction" />
            <cardListOrizontal title="Action" :list="store.filmByGenre[1]" />

        </div>
    </div>
</template>

<script>
import CardListOrizontal from './CardListOrizontal.vue';
import CardComponent from './CardComponent.vue';
import CardList from './CardList.vue';
import { store } from '../store.js';
export default {
    name: 'MainComponent',
    components: {
        CardComponent,
        CardList,
        CardListOrizontal
    },
    data() {
        return {
            store,

        }
    }
}
</script>

<style lang="scss" scoped>
.cardMedia {

    color: white;
    display: flex;

}

.cardGallery {
    padding-top: 80px;


}

/* display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
    height: calc(100vh - 50px); */
.gallery {
    overflow-y: auto;
}
</style>