new Vue({
    el: "#vue-app",
    data: {
        name: "Andrei",
        job: "Ninja"
    },
    methods: {
        greet: function(time) {
            return "Good " + time + " " +  this.name; 
        }
    }
});
