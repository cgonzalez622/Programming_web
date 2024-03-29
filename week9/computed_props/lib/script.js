// instructions:
// add a computed object in the appropriate location in the Vue object
// and create computed prop called 'fullAddress'.
// Create the appropriate function in for the computed property to 
// concatenate and return the full address
// so that line 12 in the html can simply be:
// <p> {{fullAddress}}</p>
Vue.createApp({
  data() {
    return {
      streetAddress: "2501 Stevens Ave",
      city: "Minneapolis",
      state: "Minnesota",
      postalCode: "55404"
    }
  },
  methods: {
    newNow() {
        console.log("firing new now");
        return Date.now();
    }
  },
  computed: {
        fullAddress() {
            console.log("firing full name")
            return this.streetAddress + " " + this.city + " " + this.state + " " + this.postalCode + " "
        },
        now() {
            console.log("firing now")
            return Date.now();
        }
    }
}).mount("#app");