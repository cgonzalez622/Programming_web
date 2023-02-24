const {createApp} = Vue;
createApp({
    data() {
        return{
            name: "World",
            smart: "able to learn to understand and perform basic tasks.",
            live: "lifespan is 20 years.",
            social: "in herds, and will even 'adopt' groups of sheep or goats as their own herd.", 
            grow: "grow as much as 6 feet tall",
            hum: "hum. Humming is one of the ways llamas communicate.",
            therapy_animals: "considered to have a soothing aura.",
            yarn: "is extremely versatile.",
            shoot: "shoot green spit up to 10 feet away.",
            plant_lovers: "vegetarians.",
            /* camelid: "members of the camelid family." */
        }
    }
}).mount("#myApp");