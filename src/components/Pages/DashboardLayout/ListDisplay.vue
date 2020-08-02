<template>
  <div id="wishListDisplay">
    <v-card>
      <v-card-title>
        Artist name will appear here...
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn>See more <v-icon>mdi-arrow-right-bold</v-icon></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "WishListDisplay",

  props: {
    artist: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
