<script setup>
import { RouterLink } from "vue-router";
defineProps(["id", "name", "image"]);
</script>

<template>
    <div class="mov-card">
        <img class="mov-image" :src="image" :alt="name" />
        <div class="footer">
            <RouterLink :to="'/period/'+id">{{ name }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
</style>