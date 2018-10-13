const one = new Vue({
    el: '#vue-app-one',
    data: {
       title: 'Vue App One', 
    },

    methods: {

    },

    computed: {
        greet: function() {
            return `Hello! Greetings from Vue App One!`;
        }
    },
});

// Second
const two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two',
    },

    methods: {
        changeTitle: function() {
            one.title = 'Hello!';
        },


        changeBackTitle: function() {
            one.title = 'Vue App One';
        }
    },

    computed: {
        greet: function() {
            return `Hi! Greetings from Vue App Two!`;
        }
    },
});

// This will run automatically upon refresh.
// two.title = 'Changed Title from outside the two Vue Instances';