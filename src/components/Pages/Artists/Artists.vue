<template>
  <div>
    <v-form class="filter-form">
      <v-text-field
        ref="filter"
        class="filter"
        placeholder="Type here to filter through the artists in your collection..."
        append-icon="mdi-close-circle"
        @click:append="clearFilter"
        outlined
      ></v-text-field>
    </v-form>

    <div class="artist-list">
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
          v-for="(singleArtist, index) in artistsList"
          :key="index"
        >
          <h1>
            {{ singleArtist.artist }}
          </h1>
        </v-card>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Artists",

  created() {
    return this.$store.dispatch("getAllInfoFromDb");
  },

  computed: {
    artistsList() {
      return this.$store.getters.infoToFilter;
    },

    loading() {
      return this.$store.getters.loading;
    }

    //filterList() {}
  },

  data() {
    return {
      search: ""
    };
  },

  methods: {
    clearFilter() {
      this.$refs.filter.reset();
    }
  }
};
</script>

<style scoped>
.filter-form {
  width: 85%;
  margin: 7% auto;
}
.filter {
  width: 95%;
  margin: auto;
}
.form-button {
  float: right;
}

.list-card {
  width: 55%;
  margin: 1% auto;
}
</style>
