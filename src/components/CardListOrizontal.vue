<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <div class="d-flex flex-nowrap overflow-x-auto">
            <div class="myCol" v-for="(card, index) in list" :key="card.id">
                <CardComponent :item="card"/>
            </div>
        </div>
    </div>

</template>

<script>
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardListOrizontal',
    components: {
        CardComponent
    },
    props: {
        title: String,
        list: Array
    }
}
</script>

<style lang="scss" scoped>
.myCol {
    width: 300px;
    flex-shrink: 0;
    overflow-x: auto;
}
</style>