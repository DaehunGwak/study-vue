<template>
  <main>
    {{ this.getDummy }}
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["getDummy"])
  }
};
</script>

<style></style>
