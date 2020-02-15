<template>
  <div id="genres">
    <div>
      <h1>
        Here are the Genres in your collection.
      </h1>
    </div>

    <div class="genre-list">
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

      <v-list style="max-height:600px;" class="overflow-y-auto">
        <v-card
          class="list-card"
          v-for="(singleGenre, index) in genreList"
          :key="index"
        >
          <h1>
            {{ singleGenre.genre }}
          </h1>
        </v-card>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Genres",

  created() {
    return this.$store.dispatch("getAllInfoFromDb");
  },

  computed: {
    genreList() {
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
.list-card:last-child {
  margin-bottom: 15%;
}
</style>
