<template>
  <div id="pinned">
    <v-card class="pinned" tile>
      <h1>Pinned messages will appear here.</h1>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Pinned",

  data() {
    return {};
  }
};
</script>

<style scoped>
.pinned {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
