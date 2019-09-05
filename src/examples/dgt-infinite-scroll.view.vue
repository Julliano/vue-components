<style lang="scss" scoped>
  .dgt-infinite-scroll-view {
    height: 450px;
    width: 60vw;
    display: inline-block;
    align-self: center;
    .left {
      height: 100%;
      width: calc(50% - 20px);
      margin-right: 40px;
    }
    .right {
      height: 100%;
      width: calc(50% - 20px);
    }
    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    .custom {
      --dgt-infinite-scroll-height: calc(100% - 40px);
      --dgt-outside-margin: 10px;
    }
  }
</style>

<template>
    <section class="dgt-infinite-scroll-view">
        <div class="left">
            <h3>
                Default direction without Outside-Viewport component
            </h3>
            <dgt-infinite-scroll @scroll-ending="loadMore" :directionDown="true" class="custom">
                <template>
                    <div v-for="(card, i) in cards" :key="i" :class="`card-index-${i}`">
                        {{ i }}
                        <dgt-card :key="card.id" :dataProps="card"></dgt-card>
                    </div>
                </template>
            </dgt-infinite-scroll>
        </div>
        <div class="right">
            <h3>
                Inverted with Outside-Viewport component
            </h3>
            <dgt-infinite-scroll @scroll-ending="loadMoreRight" :directionDown="false" class="custom">
                <dgt-outside-viewport v-for="(card, i) in cardsRight" :key="i" :class="`card-index-${i}`">
                    {{ i }}
                    <dgt-card :key="card.id" :dataProps="card"></dgt-card>
                </dgt-outside-viewport>
            </dgt-infinite-scroll>
        </div>
    </section>
</template>

<script>
    import dgtCard from '../components/dgt-card.vue';
    import dgtInfiniteScroll from '../components/dgt-infinite-scroll.vue';
    import dgtOutsideViewport from '../components/dgt-outside-viewport.vue';

    let cards = [
        {
            icon: 'time_to_leave',
            emit: '/uber',
            name: 'Dados Uber',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            emit: '/uber',
            name: 'Dados Uber',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            emit: '/uber',
            name: 'Dados Uber',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'image',
            emit: '/midias',
            name: 'Histórico de localização',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            emit: '/uber',
            name: 'Dados Uber',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'image',
            emit: '/midias',
            name: 'Mídias',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            emit: '/uber',
            name: 'Dados Uber',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        }
    ];

    let cardsRight = [
        {
            icon: 'time_to_leave',
            emit: '/uber',
            name: 'Dados Uber',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            emit: '/uber',
            name: 'Dados Uber',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            emit: '/uber',
            name: 'Dados Uber',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'image',
            emit: '/midias',
            name: 'Histórico de localização',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            emit: '/uber',
            name: 'Dados Uber',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'image',
            emit: '/midias',
            name: 'Mídias',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            emit: '/uber',
            name: 'Dados Uber',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        }
    ];

    let cardToAdd = [
        {
            icon: 'time_to_leave',
            emit: '/uber',
            name: 'Dados Uber',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'image',
            emit: '/midias',
            name: 'Histórico de localização',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            emit: '/uber',
            name: 'Dados Uber',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'image',
            emit: '/midias',
            name: 'Mídias',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        },
        {
            icon: 'time_to_leave',
            emit: '/uber',
            name: 'Dados Uber',
            class: 'material-icons',
            subHeader: 'Atualizado 16/10/2018'
        }
    ];

    export default {
        name: 'dgtInfiniteScrollView',
        components: {
            dgtCard,
            dgtInfiniteScroll,
            dgtOutsideViewport
        },
        data() {
            return {
                cards,
                cardsRight
            };
        },
        methods: {
            loadMore(param) {
                console.log('Carregar mais cards');
                let func = param === 'up' ? 'unshift' : 'push';
                for (const item of cardToAdd) {
                    this.cards[func](item);
                }
            },
            loadMoreRight(param) {
                console.log('Carregar mais cards');
                let func = param === 'up' ? 'unshift' : 'push';
                for (const item of cardToAdd) {
                    this.cardsRight[func](item);
                }
            }
        }
    };
</script>
