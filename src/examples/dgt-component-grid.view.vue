<template>
    <dgt-component-grid :grid="dgtComponentGridProps.grid" :header="dgtComponentGridProps.header" :sub-header="dgtComponentGridProps.subHeader">
        <template slot="main-slot" slot-scope="mainProps">
            <div class="grid">
                <dgt-card v-for="card in mainProps.grid" :key="card.id" :dataProps="card" :style="card.style"></dgt-card>
            </div>
        </template>
    </dgt-component-grid>
</template>

<script>
    import dgtCard from '../components/dgt-card.vue';
    import dgtComponentGrid from '../components/dgt-component-grid.vue';

    const dgtComponentGridProps = {
        grid: [
            {
                icon: 'calendar_today',
                emit: '/midias',
                name: 'Agenda',
                class: 'material-icons',
                count: 0
            },
            {
                icon: 'time_to_leave',
                emit: '/uber',
                name: 'Dados Uber',
                class: 'material-icons',
                count: 12
            },
            {
                icon: 'image',
                emit: '/midias',
                name: 'Mídias',
                class: 'material-icons',
                count: 0
            },
            {
                icon: 'time_to_leave',
                emit: '/uber',
                name: 'Dados Uber',
                class: 'material-icons',
                count: 12
            },
            {
                icon: 'time_to_leave',
                emit: '/uber',
                name: 'Dados Uber',
                class: 'material-icons',
                count: 12
            },
            {
                icon: 'time_to_leave',
                emit: '/uber',
                name: 'Dados Uber',
                class: 'material-icons',
                count: 12
            }
        ],
        header: 'Exemplo de título',
        subHeader: 'Exemplo de sub título'
    };

    export default {
        name: 'dgtComponentGridView',
        components: {
            dgtCard,
            dgtComponentGrid
        },
        data() {
            return {
                dgtComponentGridProps
            };
        }
    };
</script>
