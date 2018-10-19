<template>
    <div>
        <dgt-card :data="{ icon: 'add', name: 'Nova pesquisa...' }" style="margin: 20px"></dgt-card>            
    </div>
</template>

<script>
    import dgtCard from '../components/dgt-card.vue';

    export default {
        data() {
            return {
            };
        },
        components: {
            dgtCard
        }
    };
</script>