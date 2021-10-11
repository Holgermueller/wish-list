<template>
  <div>
    <v-card class="sorting-buttons" outlined>
      <v-card-title>
        <v-icon left>mdi-sort</v-icon>
        Sort your list
      </v-card-title>
      <v-card-actions>
        <v-btn @click="sortBy('artist')">
          <v-icon left>mdi-sort-alphabetical-ascending</v-icon>
          Name</v-btn
        >

        <v-btn @click="reverseSort('artist')">
          <v-icon left>mdi-sort-alphabetical-descending</v-icon>
          Name
        </v-btn>

        <v-btn @click="sortBy('title')">
          <v-icon left>mdi-sort-alphabetical-ascending</v-icon>
          Title</v-btn
        >

        <v-btn @click="reverseSort('title')">
          <v-icon left>mdi-sort-alphabetical-descending</v-icon>
          Title
        </v-btn>

        <v-btn @click="prioritySort('priority')">
          <v-icon left>mdi-priority-high</v-icon>
          Priority</v-btn
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
      required: true,
    },
  },

  data() {
    return {
      mutableWishList: this.getWishList,
    };
  },

  methods: {
    sortBy(prop) {
      this.mutableWishList.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },

    reverseSort(prop) {
      this.mutableWishList
        .sort((a, b) => (a[prop] < b[prop] ? -1 : 1))
        .reverse();
    },

    prioritySort(prop) {
      this.mutableWishList.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style scoped>
.v-card {
  border-color: #190061;
}
.sorting-buttons {
  width: 75%;
  margin: 2% auto;
}
</style>
