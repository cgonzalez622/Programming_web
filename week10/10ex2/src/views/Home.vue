<script setup>
import { RouterLink } from "vue-router";
import MusicList from "../data/music-list.json";
console.log("MusicList", MusicList);
</script>
<template>
    <div class="song-container">
        <div class="song-list-item" v-for="(song, index) in MusicList" :key="index">
        <RouterLink :to="'/song/' + song.slug">{{song.title}}</RouterLink>
        </div>
    </div>
</template>
<style>
.song-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
}
.song-list-item {
    width: auto;
    padding: 20px;
    margin: 20px;
    border: 3px solid black;
    border-radius: 4px;
    background: white;
}
.song-list-item:hover {
    background: pink;
}
.song-list-item a {
    color: black;
    text-decoration: none;

}
.song-list-item:hover a {
    color: aqua;
}

</style>