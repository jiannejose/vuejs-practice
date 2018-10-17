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

