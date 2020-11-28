<template>
  <div>
    <app-header :title="str" @renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      str: 'Title using root data 🌱',
    };
  },
  components: {
    AppHeader,
  },
  methods: {
    renewStr() {
      this.str = 'Another Title by renew event 🥳'
    }
  }
}
</script>

<style>

</style>