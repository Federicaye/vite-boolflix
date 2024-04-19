<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <div class="d-flex align-items-center">
            <div @click="scrollLeft"><i class="fa-solid fa-chevron-left"></i></div>
            <div class="d-flex flex-nowrap overflow-x-auto overflow-y-hidden" ref="listOrizontal">
                <div class="myCol" v-for="(card, index) in list" :key="card.id">
                    <CardComponent :item="card" />
                </div>
            </div>
            <div @click="scrollRight"><i class="fa-solid fa-chevron-right"></i></div>
        </div>
    </div>

</template>

<script>
import { ref, onMounted } from 'vue';
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardListOrizontal',
    setup() {
        const listOrizontal = ref(null)

        return {
            listOrizontal
        }
    },
    methods: {
        scrollRight() {
            this.$refs.listOrizontal.scrollBy({
                left: 300
                });
        },
        scrollLeft() {
            this.$refs.listOrizontal.scrollBy({
                left: -300
                });
        },
        
    },
   

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
.scrollx {
    width: 100%;
}

.myCol {

    flex-shrink: 0;
}
</style>