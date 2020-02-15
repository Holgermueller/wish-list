<template>
  <div id="recent">
    <v-card class="recent-header">
      <v-card-title>
        <h1>Recent Albums:</h1>
      </v-card-title>
    </v-card>

    <div>
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

      <v-list style="max-height: 500px;" class="overflow-y-auto">
        <RecentsCard
          v-for="(singleAlbum, index) in albumsList"
          :key="singleAlbum.albumId"
          :index="index"
          :albumTitle="singleAlbum.albumTitle"
          :artist="singleAlbum.artist"
          :genre="singleAlbum.genre"
          :format="singleAlbum.format"
        />
      </v-list>
    </div>
  </div>
</template>

<script>
import RecentsCard from "./RecentCard";

export default {
  name: "Recents",

  components: {
    RecentsCard
  },

  created() {
    return this.$store.dispatch("getAlbumsFromDb");
  },

  computed: {
    albumsList() {
      return this.$store.getters.albums;
    },

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
