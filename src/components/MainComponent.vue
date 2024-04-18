<template>
    <div class="gallery">
        <div class="cardGallery container">
            <CardList/>

            <CardList title="risultati della ricerca" :list="store.findMedia" />

        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import CardList from './CardList.vue';
import { store } from '../store.js';
export default {
    name: 'MainComponent',
    components: {
        CardComponent,
        CardList
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