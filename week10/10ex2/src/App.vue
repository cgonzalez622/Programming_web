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
html {
    background: lightcyan;
}
nav {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-size: 50px;
    display: block;
    text-align: center;
}
a {
    text-decoration: none;
}
</style>
