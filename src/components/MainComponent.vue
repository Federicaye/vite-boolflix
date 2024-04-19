<template>
    <div class="gallery">
        <div class="cardGallery container">
            <cardListOrizontal v-show="store.showresults" :title="`risultati per genere ${store.optionsFilter.params.with_genres}`"
                :list="store.genre" />

            <CardList v-show="store.showresults2" :title="`risultati della ricerca per ${store.options.params.query}`" :list="store.findMedia" />

            <cardListOrizontal  :title="this.genreName[index]" :list="genreList.data.results"
                v-for="(genreList, index) in store.genreAction" />

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
    },
    computed: {
       genreName() {
         /*  const results = [];
           this.store.genreId.forEach((el, index) =>{
               if(el == ) { results.push('Action'); } 
               else if(el == 80) { results.push('Action');}
            });

            return results  */
          return this.store.genreId.map((el, index) =>{
                switch (index) {
        case 0:
          return 'Action';
        case 1:
          return 'Adventure';
        case 2:
          return 'Crime';
        case 3:
            return 'Horror';
        case 4:
            return 'Thriller'}
            }) 
        } 
       /*  genreName(){
            return this.store.genreId.map((el, index) =>{
                switch (el) {
        case 28:
          return 'Action';
        case 12:
          return 'Adventure';
        case 80:
          return 'Crime';
        case 27:
            return 'Horror';
        case 53:
            return 'Thriller'}
            }) 
        } */
    },
    mounted(){
        console.log(this.genreName)
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