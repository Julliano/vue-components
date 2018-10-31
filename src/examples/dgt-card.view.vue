<style lang="scss" scoped>
.inline {
  display: inline-flex;
  .grid {
    display: grid;
    text-align: center;
  }
}
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
    <div>
        <div class="inline">
            <div class="grid">
                <label>Icon dgt-vitra</label>
                <dgt-card @card-cliked="doSomething" :data="data" class="custom"></dgt-card>
            </div>
            <div class="grid">
                <label>Icon material-icons</label>
                <dgt-card @card-cliked="doSomething" :data="data2" class="custom"></dgt-card>
            </div>
        </div>
    </div>
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
                    name: 'Nova pesquisa...',
                    emit: 'New search',
                    class: 'mdi mdi-access-point-network'
                },
                data2: {
                    icon: 'add',
                    name: 'Nova pesquisa...',
                    emit: 'New search',
                    class: 'material-icons'
                }
            };
        },
        methods: {
            doSomething(param) {
                return param;
            }
        }
    };
</script>
