const { createApp } = Vue;
createApp({ 
  data() {
    return {
            consoles: [{
            image: "imgs/The School of Athens by Raphael.png",
            movement: "Renaissance",
            time: "14th to 17th century",
            locations: "Italy, and gradually across Europe", 
            artistExamples: "Leonardo da Vinci, Michelangelo, Caravaggio",
            description: "A shift from medieval period styles to the representational forms of mostly biblical scenes to include portraits, episodes from Classical religion, and culture."
            },
            {
            movement: "Impressionism",
            time: "1867 and 1886",
            locations: "Key regions are France and England",
            artistExamples: "Claude Monet, Edgar Degas, Paul Cezanne",
            description: "A art movement that centered around the rebelling against classical subject matter and embraced modernity, desiring to create works of reality."
            },
            {
            movement: "Modernism",
            time: "late 19th and early 20th centuries",
            locations: "Global phenomenon",
            artistExamples: "Pablo Picasso, Louise Bourgeois, Georgia O'Keeffe",
            description: "A movement that sought for the creation of new forms of art, philosophy, and social organization which reflected the newly emerging industrial world, including features such as urbanization, architecture, new technologies, and war."
            },
            {
            movement: "Minimalism",
            time: "early 1960s and present",
            locations: "Emerged in New York and would spread globally",
            artistExamples: "Donald Judd, Walter De Maria, Richard Serra",
            description: "A movement that exposed the essence, essentials or identity of a subject through eliminating all non-essential concepts."
            },
            {
            movement: "Contemporay",
            time: "20th century or in the 21st century",
            locations: "Global",
            artistExamples: "Jean-Michel Basquiat, Keith Haring, Agnes Martin",
            description: "Contemporary art is part of a cultural dialogue that concerns larger contextual frameworks such as personal and cultural identity, family, community, and nationality."
            }]
        }
    }
    
}).mount("#myCollectionApp");