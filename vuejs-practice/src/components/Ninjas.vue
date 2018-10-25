<template>
    <div id="ninjas">
        <ul>
            <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            ninjas: [
                {name: 'Ryu', speciality: 'Vue Component', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Histoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false},
            ]       
        }
    }
}
</script>


// When a scoped is added to a style tag, all the styles inside it will only be applicable to its component.
<style scoped>
    h3 {
        color: #22B830;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    ul {
        list-style: none;
        text-align: center;
        padding-left: 0;
    }

    li {
        display: block;
        padding: 5px 0;
    }
</style>


