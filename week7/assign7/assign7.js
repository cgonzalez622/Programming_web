const { createApp } = Vue;
createApp({ 
  data() {
    return {
            consoles: [{
            movement: "Renaissance",
            time: "14th to 17th century",
            locations: "Italy, and gradually across Europe", 
            artistExamples: "Leonardo da Vinci, Michelangelo, Caravaggio",
            description: "a gradual shift from the abstract forms of the medieval period to the representational forms of the 15th century. Subjects grew from mostly biblical scenes to include portraits, episodes from Classical religion, and events from contemporary life."
            },
            {
            movement: "Impressionism",
            time: "1867 and 1886",
            locations: "Key regions are France and England",
            artistExamples: "Claude Monet, Edgar Degas, Paul Cezanne",
            description: "a radical art movement that began in the late 1800s, centered primarily around Parisian painters. Impressionists rebelled against classical subject matter and embraced modernity, desiring to create works that reflected the world in which they lived."
            },
            {
            movement: "Modernism",
            time: "late 19th and early 20th centuries",
            locations: "Global phenomenon",
            artistExamples: "Pablo Picasso, Louise Bourgeois, Georgia O'Keeffe",
            description: "The movement reflected a desire for the creation of new forms of art, philosophy, and social organization which reflected the newly emerging industrial world, including features such as urbanization, architecture, new technologies, and war."
            },
            {
            movement: "Minimalism",
            time: "early 1960s and present",
            locations: "Emerged in New York and would spread globally",
            artistExamples: "Donald Judd, Walter De Maria, Richard Serra",
            description: "a movement where the work is set out to expose the essence, essentials or identity of a subject through eliminating all non-essential forms, features or concepts."
            },
            {
            movement: "Contemporay",
            time: "20th century or in the 21st century",
            locations: "Global",
            artistExamples: "Jean-Michel Basquiat, Keith Haring, Agnes Martin",
            description: "Diverse and eclectic, contemporary art as a whole is distinguished by the very lack of a uniform, organising principle, ideology, or '-ism'. Contemporary art is part of a cultural dialogue that concerns larger contextual frameworks such as personal and cultural identity, family, community, and nationality."
            }]
        }
    }
    
}).mount("#myCollectionApp");