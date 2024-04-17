<template>

    <div>
        <p>{{ title }}</p>
        <p>{{ titleOriginal }}</p>
    </div>

</template>

<script>
export default {
    name: 'CardComponent',
    props: ['title', 'titleOriginal']
}
</script>

<style lang="scss" scoped></style>