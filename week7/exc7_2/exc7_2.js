const { createApp } = Vue;
createApp({
    data ()  {
        return {
            names: ["one", "two", "three"],
            car: {
                tires: "good",
                color: "red",
                mirror: "sides"
            }
        }
    }

}).mount("#myApp");