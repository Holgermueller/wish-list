<template>
  <div>
    <h1>
      {{ artist }}
    </h1>

    <SingleArtistAlbumListCard
      v-for="(singleAlbum, index) in albumsToDisplay"
      :key="index"
      :albumTitle="singleAlbum.albumTitle"
      :format="singleAlbum.format"
      :albumId="singleAlbum.albumId"
      :artist="artist"
      class="list-card"
    />

    <v-card> </v-card>
  </div>
</template>

<script>
import SingleArtistAlbumListCard from "./SingleArtistAlbumListCard";

export default {
  name: "SingleArtist",

  components: {
    SingleArtistAlbumListCard
  },

  props: {
    artist: {
      type: String,
      required: true
    }
  },

  created() {
    return this.$store.dispatch("getAllAlbumsBySingleArtist", {
      artist: this.artist
    });
  },

  computed: {
    albumsToDisplay() {
      return this.$store.getters.albums;
    },

    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style scoped>
.list-card {
  width: 55%;
  margin: 1% auto;
}
</style>
