<template>

    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="img" alt="">
            </div>
            <div class="flip-card-back">
            <p v-if="title">{{ title }}</p>
            <p v-if="titleOriginal">{{ titleOriginal }}</p>
            <p v-if="title2">{{ title2 }}</p>
            <p v-if="titleOriginal2">{{ titleOriginal2 }}</p>
            <p>{{ vote }}</p>
            <img :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`" alt="">

            <div class="vote d-flex justify-content-center align-items-center">
                <div v-for="n in voteFiveStar"><i class="fa-solid fa-star"></i></div>
            </div>
        </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'CardComponent',
    props: ['title', 'titleOriginal', 'title2', 'titleOriginal2', 'vote', 'language', 'country', 'img'],
    computed: {
        voteFiveStar() {
            return Math.round(this.vote / 2);
        }
    }
}
</script>

<style lang="scss" scoped>

.flip-card {
  background-color: transparent;
  width: 200px;
  height: 300px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; 
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
.vote {
    display: flex;
    text-align: center;
}
.flip-card-front img {
    width: 100%;
}

.flip-card-back img {
    width: 30px;
}

i {
    color: rgb(252, 58, 40);
}
</style>