<template>
  <div id="recent">
    <v-card class="recent-header">
      <v-card-title>
        <h1>Recent Messages appera here:</h1>
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
  width: 45%;
  float: right;
  margin-top: 2%;
  margin-right: 3%;
}
.recent-header {
  margin-bottom: 2%;
}
.progress {
  text-align: center;
}
</style>
