<template>
  <header>
    <h1>{{ title }}</h1>
    <button @click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    sendEvent(event) {
      console.log(event, "sendEvent");
      this.$emit('renew');
    },
  }
}
</script>

<style>

</style>