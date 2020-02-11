<template>
  <div id="recent">
    <v-card class="recent-header">
      <v-card-title>
        <h1>Recent Albums:</h1>
      </v-card-title>
    </v-card>

    <RecentsCard
      v-for="(singleAlbum, index) in albumsList"
      :key="singleAlbum.albumId"
      :index="index"
      :albumTitle="singleAlbum.albumTitle"
      :artist="singleAlbum.artist"
      :genre="singleAlbum.genre"
      :format="singleAlbum.format"
    />
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
</style>
