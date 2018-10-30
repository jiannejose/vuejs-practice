<template>
    <footer>
        <p>{{ copyright }} {{ title }}</p>
    </footer>
</template>

<script>
export default {
    props: {
        copyright: {
            type: String,
        },

        title: {
            type: String,
        }
    },

    data() {
        return {
            // copyright: 'Copyright 2018 Vue Ninjas',
        }
    }
}
</script>

<style>
    footer {
        background-color: #222;
        padding: 6px;
    }

    footer p {
        color: lightgreen;
        text-align: center;
    }
</style>
