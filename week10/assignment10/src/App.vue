<script setup>
    import {RouterView, RouterLink} from "vue-router"
</script>

<template>
    <nav>
        <h1><RouterLink to="/">Art Movements</RouterLink></h1>
    </nav>
    <RouterView />
</template>

<style scoped>
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        margin-top: 50px;
        margin-bottom: 50px;
        font-size: 40px;
    }
</style>
