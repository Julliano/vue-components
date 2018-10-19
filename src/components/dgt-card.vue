<style lang="scss" scoped>
    .dgt-card-component {
        width: 200px;
        min-height: 55px;
        box-shadow: 0px 1px 4px 2px #c7c7c7;
        background: white;
        border-radius: 4px;
        padding: 10px;
        margin: 10px 12px 10px 0;
        cursor: pointer;
        display: inline-flex;
        i {
            font-size: 50px;
            width: 33%;
            margin: auto 0;
            opacity: 0.5;
        }
        div {
            margin: auto;
            width: 67%;
            .opacity-5 {
                opacity: 0.5;
            }
        }
    }
</style>
<template>
    <div class="dgt-card-component component" @click="goTo( data.url )">
        <i class="material-icons">{{ data.icon }}</i>
        <div>
            <span>
                {{ data.name }}
                <span class="opacity-5" v-if="data.count !== undefined">
                    ({{ data.count }})
                </span>
            </span>
            <br>
            <small name="card-subheader" class="opacity-5" v-if="data.subHeader">
                {{ data.subHeader }}
            </small>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dgtCard',
        props: {
            data: Object
        },
        methods: {
            goTo(url) {
                console.log(url);
            }
        }
    };
</Script>