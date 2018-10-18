<style lang="scss" scoped>
    .dgt-details-component {
        height: 100%;
        border-left: 3px solid #ccc;
        width: 0px;
        top: 0;
        right: 0;
        z-index: 2;
        bottom: 0;
        background: #f5f5f5;
        color: #8c8c8c;
        transition: all 1s;
        overflow-y: hidden;
        hr {
            display: block;
            -webkit-margin-before: 0px;
            -webkit-margin-after: 0px;
            border-top: 3px solid #ccc;
        }
        &.showDetails {
            margin-right: 0;
            min-width: 380px;
            .form-group {
                margin-bottom: 15px;
            }
            .title{
                display: flex;   
                background: whitesmoke;
                padding-left: 10px;
                &.informationTitle{
                    cursor: pointer;
                }
                .toggle-analise {
                    margin: 10px 0px 0 0px;
                }
                h5{
                    margin: 12px 0px 13px;
                    text-transform: uppercase;
                }
            }
            .obj-bottom-details {
                overflow-y: auto;
                height: calc(100% - 58px);
                max-height: 360px;
                i {
                    font-size: 18px;
                }
                footer {
                    padding: 14px 15px 15px;
                    text-align: right;
                }
                button {
                    &.armazenar{
                        text-transform: uppercase;
                        margin-left: auto;
                        background-color: transparent;
                        border-radius: .25em;
                        height: 2.2em;
                        border: none;
                        display: flex;
                        align-items: center;
                        color: #164C9D;
                        font-weight: bold;
                        padding: 0 0;
                        margin-right: 20px;
                        transition: all .2s ease-in-out;
                        cursor: pointer;
                        .saved{
                            width: 0;
                        }
                        svg {
                            height: 18px;
                            width: 18px;
                            margin: 0 4px;
                            position: relative;
                            top: -1px;
                            transition: all .2s ease-in-out;
                        }
                        &:hover {
                            background-color: rgba(0,0,0,.1);
                        }
                        &:focus {
                            outline: none;
                        }
                        &.notPurge {
                            color: #388E3C;
                            outline: none;
                            .unsaved{
                                width: 0;
                            }
                            .saved{            
                                width: 18px;
                            }
                        }
                    }
                }
            }
            .half-top-details {
                transition: all 0.7s ease-in;
                overflow-y: auto;
                background: white;
                height: calc(100% - 84px);
                &.closeAnalise{
                    height: calc(100% - 400px) !important;
                }
            }
            .main-div {
                padding-left: 15px;
                &.analise {
                    margin-top: 10px;
                    font-size: 12px;
                    color: black;
                    .flex{
                        display: inline-flex;
                        width: 100%;
                    }
                    .col-6{
                        width: 50%;
                    }
                    .textarea {
                        display: grid;
                        padding-right: 15px;
                    }
                    textarea {
                        margin-top: 5px;
                        height: 50px;
                        padding: 5px;
                        border-radius: 0.25rem;
                    }
                }
                .storage {
                    display: inline-flex;
                    right: 20px;
                    position: absolute;
                    input {
                        margin-left: 5px;
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="dgt-details-component component" :class="{showDetails: show}">
        <div v-if="data" class="title">
            <h5>Detalhes</h5>
        </div>
        <slot name="halfTop" :data="data" :columns="defaultColumns" :open="showAnalise"></slot>
        <hr/>
        <slot name="halfBottom" :obj="obj"></slot>
    </div>
</template>

<script>

export default {
    name: 'dgtDetails',
    components: {
    },
    props: {
        data: {},
        defaultColumns: Array,
        showAnalise: true
    },
    data() {
        return {
            obj: Object,
            show: false,
            notEmail: Boolean
        };
    },
    watch: {
        data: function() {
            this.obj = this.data;
            this.showDetails(this.obj);
        }
    },
    methods: {
        showDetails: function(obj) {
            if (obj) return this.show = true;
            return this.show = false;
        }
    }
};
</script>
