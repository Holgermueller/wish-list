<template>
  <div>
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      v-model="searchTerm"
      placeholder="Filter through your list..."
      outlined
      clearable
      class="list-filter"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "FilterForList",

  props: {
    getWishList: {
      type: Array,
    },
  },

  data() {
    return {
      searchTerm: "",
    };
  },

  computed: {
    filterByName() {
      if (this.searchTerm) {
        return this.getWishList.filter((listItem) => {
          return (
            listItem.artist
              .toLowerCase()
              .indexOf(this.searchTerm.toLowerCase()) > -1
          );
        });
      } else {
        return this.getWishList;
      }
    },
  },
};
</script>

<style scoped></style>
