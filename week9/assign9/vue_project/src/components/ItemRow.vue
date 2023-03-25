<script setup>
const props = defineProps(["item", "idx"]);

</script>
<template>
    <!-- wrapping 'item' in '' will give more detail to the item in the array/ second argument refers to the index number-->
    <tr class="activeRow" v-bind:class="{activeRow: true, odd: idx % 2 !== 0, owned: item.description}">
    <!-- putting v-bind infront of any attribute will  give us access to any data in our vue/javascript accessible
    another example is ....==0,second: item.locations === 'Global'-->
        <td><img v-bind:title="item.artist" v-bind:src="item.image" v-bind:alt="item.time + ' ' + item.movement"></td>
        <td>{{item.movement}}</td>
        <td>{{item.time}}</td>
        <td>{{item.locations}}</td>
        <td>{{item.artistExamples}}</td>
        <td>{{item.description}}</td>
        <td>
            <div class="cell actions">
            <button type="button" v-on:click= "$emit('deleteItem', item)">Delete</button>
            </div>
        </td>
    </tr>
</template>