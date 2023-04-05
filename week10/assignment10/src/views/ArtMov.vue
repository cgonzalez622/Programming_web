<script setup>
import { useRoute } from 'vue-router';
import ArtMov from "../data/art-mov.json";

const route = useRoute();
console.log(route.params);

const period = ArtMov.find((period) => {
    return period.id === route.params.id;
});
//if the params id and json id match lets return this object
</script>
<template>
    <div class="mov-detail">
        <h1>{{ period.movement }}</h1>
    </div>
</template>