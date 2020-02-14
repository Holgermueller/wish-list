<template>
  <div>
    <v-form class="filter-form">
      <v-text-field
        ref="filter"
        class="filter"
        v-model="search"
        placeholder="Type here to filter through the albums in your collection..."
        append-icon="mdi-close-circle"
        @click:append="clearFilter"
        outlined
      ></v-text-field>
    </v-form>

    <div class="album-list">
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
          v-for="(singleAlbum, index) in filteredAlbumsList"
          :key="index"
        >
          <h1>
            {{ singleAlbum.albumTitle }}
          </h1>
        </v-card>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Albums",

  data() {
    return {
      search: ""
    };
  },

  created() {
    return this.$store.dispatch("getAllInfoFromDb");
  },

  computed: {
    albumsList() {
      return this.$store.getters.infoToFilter;
    },

    loading() {
      return this.$store.getters.loading;
    },

    filteredAlbumsList() {
      if (this.search) {
        return this.albumsList.filter(singleAlbum => {
          return this.search
            .toLowerCase()
            .split("")
            .every(l => singleAlbum.albumTitle.toLowerCase().includes(l));
        });
      } else {
        return this.albumsList;
      }
    }
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
.progress {
  text-align: center;
}
.list-card {
  width: 55%;
  margin: 1% auto;
}
</style>
