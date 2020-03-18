<template>
  <div id="recent">
    <v-card class="recent-header">
      <v-card-title>
        <h1>Recent Messages appear here:</h1>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Recents",

  components: {},

  created() {},

  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style scoped>
#recent {
  width: 75%;
  margin: 2% auto;
}
.recent-header {
  margin-bottom: 2%;
}
.progress {
  text-align: center;
}
</style>
