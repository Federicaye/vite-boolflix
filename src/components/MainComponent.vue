<template>
    <div class="cardGallery">
        <div v-for="(item, index) in store.tvShow" :key="index" class="cardMedia">
            <CardComponent :title="item.original_name" :titleOriginal="item.name" />
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
    background-color: rgb(204, 34, 34);
    width: 200px;
    display: flex;

}

.cardGallery {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
}
</style>