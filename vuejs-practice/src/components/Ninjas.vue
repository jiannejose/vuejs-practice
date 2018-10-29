<template>
    <div id="ninjasList">
        <ul>
            <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
            </li>
        </ul>
        <button v-on:click="deleteNinja">Delete Ninja</button>
    </div>
</template>

<script>
export default {
    props: ['ninjas'],
    // validation of props
    // props: {
    //     ninjas: {
    //         type: Array,
    //         required: true,
    //     }
    // },
    data: function() {
        return {
                 
        }
    },
    // may also call the props this way.
    // methods: {
    //     test: function() {
    //         this.ninjas;
    //     }
    // }
    methods: {
        deleteNinja: function() {
            this.ninjas.pop();
        }
    }
}
</script>


// When a scoped is added to a style tag, all the styles inside it will only be applicable to its component.
<style scoped>
    #ninjasList {
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }

    li {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
        margin: 10px;
    }
</style>


