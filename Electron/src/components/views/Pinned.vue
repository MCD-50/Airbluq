<template>
    <div class="item-container">
        Pinned
    </div>
</template>
<script>
export default {
    beforeMount() {
        this.$store.dispatch('setCurrentRoute', '/pinned');
    },
    mounted() {

    },
    beforeDestroy() {

    },
    destroyed() {

    },

}
</script>

<style>
.item-container {
    display: flex;
    flex: 1;
    margin-left: 1em;
    margin-right: 1em;
    padding-top: 1em;
}
</style>
