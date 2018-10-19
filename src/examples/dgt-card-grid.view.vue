<template>
    <div>
        <dgt-card-grid :cards="gridExample" header="Exemplo de título" sub-header="Exemplo de sub título" style="left: 300px"></dgt-card-grid>
    </div>
</template>

<script>
    import dgtCardGrid from '../components/dgt-card-grid.vue';

    let gridExample = [
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
            icon: 'image',
            url: '/midias',
            name: 'Histórico de localização',
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
        }
    ];
    export default {
        data() {
            return {
                gridExample
            };
        },
        components: {
            dgtCardGrid
        }
    };
</script>