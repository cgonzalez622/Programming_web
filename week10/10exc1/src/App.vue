<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/alpaca">Alpaca</RouterLink> |
        <RouterLink to="/llama">Llama</RouterLink>
    </nav>
    <div class="container">
        <RouterView></RouterView>
    </div>
</template>

<style>
html {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
}
body, #app {
    margin: 0;
}
nav {
    width: 100%;
    height: 45px;
}
nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
    color: antiquewhite;
    font-weight: 900;
    font-size: 20px;
    line-height: 5;
    text-decoration: none;
}
nav a.router-link-active {
    text-decoration: underline;
    color: orange;
}
.container {
    max-width: 1200px; 
    width: 100%; 
    margin: 0 auto;
}
.container h1 {
    margin-top: 150px;
    text-align: center;
    font-size: 30px;
}
.container p {
    width: 1000px;

}
.container img {
    display: block;
    max-width: 1000px;
    width: 100%;
    margin: 20px auto 20px;
}
</style>
