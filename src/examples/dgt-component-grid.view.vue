
<template>
    <dgt-component-grid :grid="grid" :header="header" :sub-header="subHeader">
        <template slot="main-slot" slot-scope="mainProps">
            <div class="grid">
                <dgt-card v-for="card in mainProps.grid" :key="card.id" :data="card" :style="card.style"></dgt-card>
            </div>
        </template>
    </dgt-component-grid>
</template>

<script>
    import dgtCard from '../components/dgt-card.vue';
    import dgtComponentGrid from '../components/dgt-component-grid.vue';

    export default {
        name: 'dgtComponentGridView',
        components: {
            dgtCard,
            dgtComponentGrid
        },
        data() {
            return {
                grid: [
                    {
                        icon: 'calendar_today',
                        url: '/midias',
                        name: 'Agenda',
                        count: 0
                    },
                    {
                        icon: 'time_to_leave',
                        url: '/uber',
                        name: 'Dados Uber',
                        count: 12
                    },
                    {
                        icon: 'image',
                        url: '/midias',
                        name: 'Mídias',
                        count: 0
                    },
                    {
                        icon: 'time_to_leave',
                        url: '/uber',
                        name: 'Dados Uber',
                        count: 12
                    },
                    {
                        icon: 'time_to_leave',
                        url: '/uber',
                        name: 'Dados Uber',
                        count: 12
                    },
                    {
                        icon: 'time_to_leave',
                        url: '/uber',
                        name: 'Dados Uber',
                        count: 12
                    }
                ],
                header: 'Exemplo de título',
                subHeader: 'Exemplo de sub título'
            };
        }
    };
</script>