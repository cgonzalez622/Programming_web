<script setup>
import { useRoute } from "vue-router";
import MusicList from "../data/music-list.json"
const route = useRoute();
console.log(route.params.slug);
const song = MusicList.find(song => {
    return song.slug ===route.params.slug;
});
</script>
<template>
<div class="song-detail" :class="{
    rising: song.rank > song.position.positionLastWeek,
    falling: song.rank < song.position.positionLastWeek,
    same: song.rank === song.position.positionLastWeek
    }">
    <h1>{{song.rank}}</h1>
    <h2>{{song.title}}</h2>
    <img :src="song.cover" :alt="song.title">
    <p>Artist: {{song.artist}}</p>
    <p></p>
</div>
</template>
<style scoped>
.song-detail.rising {
    text-align: center;
    border: 3px solid blue;
    margin: 100px;
}
.song-detail.falling {
    text-align: center;
    border: 3px solid red;
    margin: 100px;
}
.song-detail.same {
    text-align: center;
    border: 3px solid yellow;
    margin: 100px;
}
</style>