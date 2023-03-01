const { createApp } = Vue;
createApp({
    data() {
        return {
            baseStyle: {
                fontSize: "50px", 
                fontWeight: "900"
            },
            currentRoute: "llamas",
            nameOne: "Lalalallamas",
            nameTwo: "Alalalalpacas",
            urlOne: "https://en.wikipedia.org/wiki/Llama",
            urlTwo: "https://en.wikipedia.org/wiki/Alpaca"
        }
    }
}).mount("#myApp");