<style lang="scss" scoped>
    .showcase {
        margin-left: 20px;

        h3 {
            margin: 25px 0 5px;
        }
    }
</style>

<template>
    <div class="dgt-container light padding">
        <h3>BC Components Showcase</h3>
        <hr/>
        <h4>bc-filter</h4>
        <bc-filter></bc-filter>
    </div>
</template>

<script>
    import bcFilter from './bc-components/bc-filter';

    export default {
        name: 'app',
        components: {
            bcFilter
        },
        created() {
            switch (navigator.language) {
                case 'es':
                    this.$store.commit('setLanguageText', 'es');
                    break;
                default:
                    this.$store.commit('setLanguageText', 'pt-BR');
                    break;
            }
        }
    };
</script>
