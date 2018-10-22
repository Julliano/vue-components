<template>
    <div>
        <dgt-card :data="newCard" style="margin: 10px"></dgt-card>            
    </div>
</template>

<script>
    import dgtCard from '../components/dgt-card.vue';

    export default {
        data() {
            return {
                newCard: { icon: 'add', name: 'Nova pesquisa...', url: 'New search' }
            };
        },
        components: {
            dgtCard
        }
    };
</script>