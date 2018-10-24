<template>
    <div>
        <h3>{{ title }}</h3>
        <ul>
            <li v-for="ninja in ninjas">{{ ninja }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            title: 'Ninjas',
            ninjas: ['Jianne', 'Ron', 'Jude', 'Mae']
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


