<script setup>
import { reactive } from 'vue';
import ItemRow  from "./components/ItemRow.vue";
const consoles = [
            {
            artist: "The School of Athens by Raphael",
            image: "imgs/The School of Athens by Raphael.jpg",
            movement: "Renaissance",
            time: "14th - 17th century",
            locations: "Italy, and gradually across Europe", 
            artistExamples: "Leonardo da Vinci, Michelangelo, Caravaggio",
            description: "A shift from medieval period styles to the representational forms of biblical scenes, portraits, and episodes from Classical religion.",
            id:1
            },
            {
            artist: "Water Lilies Series by Claude Monet",
            image: "imgs/Water Lilies Series by Claude Monet.jpg",
            movement: "Impressionism",
            time: "1867 - 1886",
            locations: "Key regions are France and England",
            artistExamples: "Claude Monet, Edgar Degas, Paul Cezanne",
            description: "A art movement that centered around the rebelling against classical subject matter and embraced modernity and depicting reality.",
            id:2
            },
            {
            artist: "Bauhaus Exhibition Poster (1923)",
            image: "imgs/Bauhaus Exhibition Poster (1923).jpg",
            movement: "Modernism",
            time: "late 19th - early 20th centuries",
            locations: "Global phenomenon",
            artistExamples: "Pablo Picasso, Louise Bourgeois, Georgia O'Keeffe",
            description: "Sought for the creation of new forms of art, philosophy, and social organization which reflected the newly emerging industrial world, urbanization, architecture, and war.",
            id:3
            },
            {
            artist: "Red Circle on Black, 1965 by Jiro Yoshihara",
            image: "imgs/Red Circle on Black, 1965 by Jiro Yoshihara_.jpg",
            movement: "Minimalism",
            time: "early 1960s - present",
            locations: "Emerged in New York and would spread globally",
            artistExamples: "Donald Judd, Walter De Maria, Richard Serra",
            description: "A movement that exposed the essence, essentials or identity of a subject through eliminating all non-essential concepts.",
            id:4
            },
            {
            artist: "Colour Tunnel by Olafur Eliasson",
            image: "imgs/One-Way Colour Tunnel by Olafur Eliasson (2007).jpg",
            movement: "Contemporay",
            time: "late 20th/21st century - present",
            locations: "Global",
            artistExamples: "Jean-Michel Basquiat, Keith Haring, Agnes Martin",
            description: "A cultural dialogue that concerns larger contextual frameworks such as personal and cultural identity, family, community, and nationality.",
            id:5
            }
        ];
const newConsoleObj = {            
        image: "",
        movement: "",
        time: "",
        locations: "", 
        artistExamples: "",
        description: ""
        };

const state = reactive({consoles, newConsoleObj});
function addNewConsole() {
    state.consoles.push({
        image: state.newConsoleObj.image,
        movement: state.newConsoleObj.movement,
        time: state.newConsoleObj.time,
        locations: state.newConsoleObj.locations, 
        artistExamples: state.newConsoleObj.artistExamples,
        description: state.newConsoleObj.description,
        id: state.consoles.length + 1, 
    });
        state.newConsoleObj.image = "";
        state.newConsoleObj.movement = "";
        state.newConsoleObj.time = "";
        state.newConsoleObj.locations = ""; 
        state.newConsoleObj.artistExamples = "";
        state.newConsoleObj.description = "";
}
function handleDelete(itemToDelete) {
    state.consoles = state.consoles.filter((itemToCheck) => {
        return itemToCheck !== itemToDelete;
    });

}
</script>

<template>
<div class="collection_wrapper">
    <h1>Western Art Movements</h1>
    <table class="styled-table">
            <thead>
                <th></th>
                <th>Movement</th>
                <th>Time</th>
                <th>Locations</th>
                <th>Artist Examples</th>
                <th>Description</th>
                <th class="cell actions">actions</th>
            </thead>
            <tbody>
                <ItemRow 
                v-for="(console, index) in state.consoles" 
                v-bind:key="index" 
                v-bind:item="console" 
                v-bind:index="index"
                v-on:delete-item="handleDelete"
                />
            </tbody>
        </table> 
        <form v-on:submit.prevent="submitHandler">
            <fieldset>
                <!--Adds a console to the collection -->
                <legend>Add a Art Movement!</legend>
                <div>
                    <label for="image">Image</label>                        
                    <input id="image" type="text" v-model="state.newConsoleObj.image">
                </div>
                <div>
                    <label for="movement">Movement</label>                        
                    <input id="movement" type="text" v-model="state.newConsoleObj.movement">
                </div>
                <div>
                    <label for="time">Time</label>                        
                    <input id="time" type="text" v-model="state.newConsoleObj.time">
                </div>
                <div>
                    <label for="locations">Locations</label>                        
                    <input id="locations" type="text" v-model="state.newConsoleObj.locations">
                </div>
                <div>
                    <label for="artistExamples">Artist Examples</label>                        
                    <input id="artistExamples" type="text" v-model="state.newConsoleObj.artistExamples">
                </div>
                <div>
                    <label for="description">Description</label>                        
                    <input id="description" type="text" v-model="state.newConsoleObj.description">
                </div>
                <button type="submit">submit</button>
            </fieldset>
        </form>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz@6..96&display=swap');
.collection_wrapper {
    background-color:bisque;
}
h1 {
    text-align: center;
    margin-bottom: 0;
    margin-top: 50px;
    font-family: 'Bodoni Moda', serif;
    font-size: 40px;
}
.styled-table, legend, label {
    font-size: 16px;
    font-family:Arial, Helvetica, sans-serif;
}
.styled-table {
    border-collapse: collapse;
    margin: 0 50px 50px 50px;
    margin-top: 0;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
    background-color: #AD4015;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}
.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #26AD97;
}
.styled-table tbody tr.active-row {
    font-weight: 500;
    color: #000;
}
.odd {
    background-color: #F8F1EB;
}
.second {
    color: gold;
}
form, fieldset {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
button {
    background-color: #26AD97; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>
