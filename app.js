new Vue({
    el: '.vue-app',
    data: {
        name: 'Ellie',
        age: 26,
        job: 'FE Web Developer',
        website: 'https://www.thenetninja.co.uk',
        websiteTag: '<a href="https://www.thenetninja.co.uk">Net Ninja</a>',
        x: 0,
        y: 0,
        number: 10,
        enteredName: '',
        enteredAge: '',
        color: '',
        fruit: '',
        myNumber: 20,
        a: 0,
        b: 0,
        available: false,
        nearby: false,
    },
    methods: {
        greet: function(time) {
            return `Good ${time}, ${this.name}!`;
        },

        addAge: function(inc) {
            this.age += inc;
        },

        subtractAge: function(dec) {
            this.age -= dec;
        },

        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        addNum: function(inc) {
            this.number += inc;
        },

        dontVisit: function() {
            alert('You can\'t!');
            console.log('Told \'ya! You won\'t be able to reach the site because of the .prevent modifier.');
        },

        logName: function() {
            console.log(`You entered your name. Your name is ${this.enteredName}.`);
        },

        logAge: function() {
            console.log(`You entered your age. You are ${this.enteredAge} years old.`);
        },


    },

    computed: {
        addToA: function() {
            console.log('addToA');
            return this.myNumber + this.a;
        },

        addToB: function() {
            console.log('addToB');
            return this.myNumber + this.b;
        },

        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});