<script setup>
import {RouterView, RouterLink} from "vue-router"

</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/song/test">Song</RouterLink>
    </nav>
  <RouterView />
</template>

<style>

</style>
