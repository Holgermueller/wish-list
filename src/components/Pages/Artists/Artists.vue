<template>
  <div id="artists">
    <v-form class="filter-form">
      <v-text-field
        ref="filter"
        class="filter"
        v-model="search"
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

      <v-list style="max-height:600px;" class="overflow-y-auto">
        <ArtistCard
          v-for="(singleArtist, index) in filteredArtistsList"
          :key="index"
          :artist="singleArtist.artist"
          class="list-card"
        />
      </v-list>
    </div>
  </div>
</template>

<script>
import ArtistCard from "./ArtistCard";

export default {
  name: "Artists",

  components: {
    ArtistCard
  },

  created() {
    return this.$store.dispatch("getAllInfoFromDb");
  },

  computed: {
    artistsList() {
      return this.$store.getters.infoToFilter;
    },

    loading() {
      return this.$store.getters.loading;
    },

    filteredArtistsList() {
      if (this.search) {
        return this.artistsList.filter(singleArtist => {
          return this.search
            .toLowerCase()
            .split("")
            .every(l => singleArtist.artist.toLowerCase().includes(l));
        });
      } else {
        return this.artistsList;
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
  margin: 2% auto;
}
.filter {
  width: 95%;
  margin: auto;
}
.progress {
  text-align: center;
}
.list-card:last-child {
  margin-bottom: 20%;
}
.list-card {
  width: 55%;
  margin: 1% auto;
}
</style>
