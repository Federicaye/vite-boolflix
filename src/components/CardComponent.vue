<template>

    <div>
        <p>{{ title }}</p>
        <p>{{ titleOriginal }}</p>
        <p>{{ title2 }}</p>
        <p>{{ titleOriginal2 }}</p>
    </div>

</template>

<script>
export default {
    name: 'CardComponent',
    props: ['title', 'titleOriginal', 'title2', 'titleOriginal2']
}
</script>

<style lang="scss" scoped></style>