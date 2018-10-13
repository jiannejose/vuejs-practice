new Vue({
    el: '#punch-app',
    data: {
        health: 100,
        ended: false,
        burst: false,

    },
    methods: {
        punch: function() {
            this.health -= 10;
            
            if( this.health <= 0) {
                this.ended = true;
                this.burst = true;
            }

        },
        restart: function() {
            this.health = 100;
            this.ended = false;
        },
    },
    computed: {

    }
});