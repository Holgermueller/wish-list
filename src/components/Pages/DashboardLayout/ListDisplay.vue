<template>
  <div id="wishListDisplay">
    <v-hover v-slot:default="{ hover }">
      <v-card :elevation="hover ? 12 : 2" class="entry-card">
        <v-card-title> {{ artist }}, {{ id }} </v-card-title>

        <v-card-subtitle>
          Title of work will appear here
        </v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            :to="{
              name: 'SingleItemPage',
              params: {
                id: id,
                artist: artist,
              },
            }"
            >See more <v-icon>mdi-arrow-right-bold</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "WishListDisplay",

  props: {
    artist: {
      type: String,
    },

    id: {
      type: String,
    },
  },
};
</script>

<style scoped>
.entry-card {
  width: 75%;
  margin: 2px auto;
}
.entry-card:hover {
  background-color: lightslategray;
}
</style>
