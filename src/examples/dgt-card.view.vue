<style lang="scss" scoped>
.custom {
  --dgt-card-width: 220px;
  --dgt-card-height: 65px;
  --dgt-card-shadow: 0px 1px 4px 2px #c7c7c7;
  --dgt-card-background: white;
  --dgt-card-border-radius: 4px;
  --dgt-card-padding: 10px;
  --dgt-card-margin: 10px 12px 10px 0;
}
</style>


<template>
    <dgt-card :data="data" class="custom"></dgt-card>
</template>

<script>
    import dgtCard from '../components/dgt-card.vue';

    export default {
        name: 'dgtCardView',
        components: {
            dgtCard
        },
        data() {
            return {
                data: {
                    icon: 'add',
                    name: 'Nova pesquisa...',
                    url: 'New search'
                }
            };
        }
    };
</script>