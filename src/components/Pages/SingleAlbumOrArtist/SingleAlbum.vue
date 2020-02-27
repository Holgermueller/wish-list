<template>
  <div id="singleAlbum">
    <v-card class="single-album-page-header">
      <h1>
        {{ albumTitle }}
      </h1>
    </v-card>

    <SingleAlbumListCard
      class="list-card"
      :artist="artist"
      :albumId="albumId"
      :albumTitle="albumTitle"
    />
  </div>
</template>

<script>
import SingleAlbumListCard from "./SingleAlbumListCard";

export default {
  name: "SingleAlbum",

  components: {
    SingleAlbumListCard
  },

  props: {
    artist: {
      type: String,
      required: true
    },

    albumId: {
      type: String,
      required: true
    },

    albumTitle: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.single-album-page-header {
  margin: 2% auto;
  width: fit-content;
  padding: 2%;
}
.list-card {
  width: 55%;
  margin: 2% auto;
}
a {
  float: right;
}
</style>
