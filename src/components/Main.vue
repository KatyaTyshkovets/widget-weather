<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Weather/>
</template>

<script>
import { defineComponent } from 'vue';
import Weather from './Weather.vue';

export default defineComponent({
      components: { Weather },
    setup() {
        return {};
    },
  
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
