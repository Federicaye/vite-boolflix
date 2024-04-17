<template>
    <div v-for="(item, index) in tvShow" :key="index">
        <CardComponent :title="item.original_name" :titleOriginal="item.name"/>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { store } from '../store.js';
export default {
    name: 'MainComponent',
    components: { CardComponent },
    data(){
        return{
        store,
        }
    }
}
</script>

<style lang="scss" scoped></style>