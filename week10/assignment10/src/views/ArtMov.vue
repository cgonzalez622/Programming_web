<script setup>
import { useRoute, RouterLink } from 'vue-router';
import ArtMov from "../data/art-mov.json";

const route = useRoute();
console.log(route.params);
//const periodId = route.params.id;
//then go into...
const period = ArtMov.find((period) => {
    return period.id === route.params.id;
});
//if the params id and json id match lets return this object
</script>
<template>
    <div class="mov-detail">
        <h1>{{ period.movement }}</h1>
        <img 
        :src="period.image" 
        :alt="period.movement" 
        class="period-image" />
        <div>
            <p>{{period.artist}}</p>
        </div>
        <div>
            <h3>Time</h3>
            <p>{{period.time}}</p>
        </div>
        <div>
            <h3>Locations</h3>
            <p>{{period.locations}}</p>
        </div>
        <div>
            <h3>Description</h3>
            <p>{{period.description}}</p>
        </div>  
         <div>
            <h3>Notable Figures</h3>
            <p>{{period.artistExamples}}</p>
        </div>
    </div>
</template>
<style scoped>
.mov-detail {
    font-family: Arial, Helvetica, sans-serif;
    width: 600px;
    margin: 0 auto;
    text-align: center;
}

</style>