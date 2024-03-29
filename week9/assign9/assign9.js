const { createApp } = Vue;
createApp({ 
  data() {
    return {
        newConsoleObj: {
            image: "",
            movement: "",
            time: "",
            locations: "", 
            artistExamples: "",
            description: ""
        },
        consoles: [{
            artist: "The School of Athens by Raphael",
            image: "https://cgonzalez622.studio.mcad.edu/program_web/imgs/The%20School%20of%20Athens%20by%20Raphael.jpg",
            movement: "Renaissance",
            time: "14th - 17th century",
            locations: "Italy, and gradually across Europe", 
            artistExamples: "Leonardo da Vinci, Michelangelo, Caravaggio",
            description: "A shift from medieval period styles to the representational forms of biblical scenes, portraits, and episodes from Classical religion."
            },
            {
            artist: "Water Lilies Series by Claude Monet",
            image: "imgs/Water Lilies Series by Claude Monet.jpg",
            movement: "Impressionism",
            time: "1867 - 1886",
            locations: "Key regions are France and England",
            artistExamples: "Claude Monet, Edgar Degas, Paul Cezanne",
            description: "A art movement that centered around the rebelling against classical subject matter and embraced modernity and depicting reality."
            },
            {
            artist: "Bauhaus Exhibition Poster (1923)",
            image: "imgs/Bauhaus Exhibition Poster (1923).jpg",
            movement: "Modernism",
            time: "late 19th - early 20th centuries",
            locations: "Global phenomenon",
            artistExamples: "Pablo Picasso, Louise Bourgeois, Georgia O'Keeffe",
            description: "Sought for the creation of new forms of art, philosophy, and social organization which reflected the newly emerging industrial world, urbanization, architecture, and war."
            },
            {
            artist: "Red Circle on Black, 1965 by Jiro Yoshihara",
            image: "imgs/Red Circle on Black, 1965 by Jiro Yoshihara_.jpg",
            movement: "Minimalism",
            time: "early 1960s - present",
            locations: "Emerged in New York and would spread globally",
            artistExamples: "Donald Judd, Walter De Maria, Richard Serra",
            description: "A movement that exposed the essence, essentials or identity of a subject through eliminating all non-essential concepts."
            },
            {
            artist: "Colour Tunnel by Olafur Eliasson",
            image: "imgs/One-Way Colour Tunnel by Olafur Eliasson (2007).jpg",
            movement: "Contemporay",
            time: "late 20th/21st century - present",
            locations: "Global",
            artistExamples: "Jean-Michel Basquiat, Keith Haring, Agnes Martin",
            description: "A cultural dialogue that concerns larger contextual frameworks such as personal and cultural identity, family, community, and nationality."
            }]
        }
    },
    methods: {
        submitHandler () {
            console.log("submitted");
            this.consoles = this.consoles.concat(this.newConsoleObj);
            this.resetForm();
        },
        resetForm () {
            this.newConsoleObj = {
                image: "",
                movement: "",
                time: "",
                locations: "", 
                artistExamples: "",
                description: ""
            }

        },
        deleteItem (item) {
            this.consoles = this.consoles.filter(console => {return console !== item;
            });
        }
    
    }
}).mount("#myCollectionApp");