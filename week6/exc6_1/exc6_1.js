/* Vue.createApp({
    data () {
        return{
            name: "ken", 
            age: 52
        }
    }
}).mount("#myVueApp"); */

//what does this mean ... you will be making your own components that look like html
//how is a interface put together -->start thinking about it can also be wrote this way as well....

const {createApp} = Vue; 
createApp({
    data () {
        return {
            name: "World",
            //happy: true
        }
    }
}).mount("#myVueApp");

