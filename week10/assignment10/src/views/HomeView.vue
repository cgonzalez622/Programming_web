<script setup>
import { RouterLink } from "vue-router";
import ArtMov from "../data/art-mov.json";
import ArtMovCard from "../components/ArtMovCard.vue";
console.log ("art list", ArtMov);
</script>

<template>
<div class="mov-container">
    <ArtMovCard class="art-mov-item" v-for="(period, index) in ArtMov" :key="index" 
    :id="period.id" 
    :name="period.movement" 
    :image="period.image"/>
<!-- <RouterLink :to="'/period/' + period.id">{{ period.movement }}</RouterLink> -->
</div>
</template>
<style scoped>
    .mov-container {
        width: 640px;
        margin: 10px auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>