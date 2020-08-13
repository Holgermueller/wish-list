<template>
  <div>
    <v-card class="sorting-buttons">
      <v-card-title>
        Sort your list
      </v-card-title>
      <v-card-actions>
        <v-btn @click="sortBy('artist')">
          <v-icon left>mdi-alphabetical-variant</v-icon>
          Name</v-btn
        >

        <v-btn @click="sortBy('title')">
          <v-icon left>mdi-alphabetical-variant </v-icon>
          Title</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SortingButtons",

  props: {
    getWishList: {
      type: Array,
    },
  },

  data() {
    return {};
  },

  methods: {
    sortBy(prop) {
      this.getWishList.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style scoped>
.sorting-buttons {
  width: 75%;
  margin: 2% auto;
}
</style>
