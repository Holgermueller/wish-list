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

      <v-list style="max-height:600px;" class="overflow-y-auto">
        <AlbumCard
          class="list-card"
          v-for="(singleAlbum, index) in filteredAlbumsList"
          :key="index"
          :albumTitle="singleAlbum.albumTitle"
        />
      </v-list>
    </div>
  </div>
</template>

<script>
import AlbumCard from "./AlbumCard";

export default {
  name: "Albums",

  components: {
    AlbumCard
  },

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
  margin-bottom: 20%;
}
</style>
