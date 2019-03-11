<template>
    <div>
        <button @click="toggle">opened toggle</button>
        <dgt-collapse
            :opened="opened"
        @opened="toggle">
            <template slot="header">
                Contas
            </template>
            <div class="checkbox">
                <input type="checkbox" id="check1" class="inp">
                <label for="check1">maria.silva@gmail.com</label>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="check2" class="inp">
                <label for="check2">garibaldo.antenor@gmail.com</label>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="check3" class="inp">
                <label for="check3">sandoval.sandro@gmail.com</label>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="check4" class="inp">
                <label for="check4">igornaldo.bonifacio@gmail.com</label>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="check5" class="inp">
                <label for="check4">tamajoara.fagundes@gmail.com</label>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="check6" class="inp">
                <label for="check6">mefistofeles.augustinho@gmail.com</label>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="check7" class="inp">
                <label for="check7">jurandir.adamancio@gmail.com</label>
            </div>
            <template slot="less-items">MENOS 2</template>
            <template slot="more-items">MAIS 2</template>
        </dgt-collapse>
    </div>
</template>
<script>
    import dgtCollapse from '../components/dgt-collapse';
    export default {
        name: 'dgtCollapseView',
        components: {
            dgtCollapse
        },
        data() {
            return {
                opened: false
            };
        },
        methods: {
            toggle() {
                this.opened = !this.opened;
            }
        }
    };
</script>
