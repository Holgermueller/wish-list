<template>
  <div id="genres">
    <v-form class="filter-form">
      <v-text-field
        ref="filter"
        class="filter"
        v-model="search"
        placeholder="Type here to filter through the genres in your collection..."
        append-icon="mdi-close-circle"
        @click:append="clearFilter"
        outlined
      ></v-text-field>
    </v-form>

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
        <GenreCard
          class="list-card"
          v-for="(singleGenre, index) in filteredGenresList"
          :key="index"
          :genre="singleGenre.genre"
        />
      </v-list>
    </div>
  </div>
</template>

<script>
import GenreCard from "./GenreCard";

export default {
  name: "Genres",

  components: { GenreCard },

  created() {
    return this.$store.dispatch("getAllInfoFromDb");
  },

  computed: {
    genreList() {
      return this.$store.getters.infoToFilter;
    },

    loading() {
      return this.$store.getters.loading;
    },

    filteredGenresList() {
      if (this.search) {
        return this.genreList.filter(singleGenre => {
          return this.search
            .toLowerCase()
            .split("")
            .every(l => singleGenre.genre.toLowerCase().includes(l));
        });
      } else {
        return this.genreList;
      }
    }
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
  margin: 2% auto 0%;
}
.filter {
  width: 95%;
  margin: auto;
}
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
