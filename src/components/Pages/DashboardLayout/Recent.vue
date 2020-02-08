<template>
  <div id="recent">
    <v-card class="recent-card">
      <v-card-title>
        <h1>Recent Albums:</h1>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text> </v-card-text>
    </v-card>

    <RecentsCard
      v-for="(singleAlbum, index) in albumsList"
      :key="singleAlbum.albumId"
      :index="index"
      :albumTitle="singleAlbum.albumTitle"
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
.recent-card {
  width: 45%;
  float: right;
  margin-top: 2%;
  margin-right: 3%;
}
</style>
