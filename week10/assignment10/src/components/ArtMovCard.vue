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
.mov-card {
    max-width: 300px;
    border: 1px solid black;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
}
.footer {
    border-top: 1px solid black;
    padding-top: 10px;
    text-align: center;
}
</style>