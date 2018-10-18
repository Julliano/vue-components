<template>
    <div>
        <dgt-details></dgt-details>
    </div>
</template>

<script>
import dgtDetails from './examples/dgt-email.view'

export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    },
    components: { 
        dgtDetails
    }
};
</script>
