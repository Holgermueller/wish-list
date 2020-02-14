<template>
  <div id="formats">
    <h1>Formats appear here.</h1>

    <div class="format-list">
      <v-layout class="progress">
        <v-flex class="text-xs-center">
          <v-progress-circular
            indeterminate
            :width="7"
            :size="70"
            class="primary--text"
            v-if="loading"
          ></v-progress-circular>
        </v-flex>
      </v-layout>

      <v-list>
        <v-card
          class="list-card"
          v-for="(singleFormat, index) in formatList"
          :key="index"
        >
          <h1>
            {{ singleFormat.format }}
          </h1>
        </v-card>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Formats",

  created() {
    return this.$store.dispatch("getAllInfoFromDb");
  },

  computed: {
    formatList() {
      return this.$store.getters.infoToFilter;
    },

    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style scoped>
.progress {
  text-align: center;
}
.list-card {
  width: 55%;
  margin: 1% auto;
}
</style>
