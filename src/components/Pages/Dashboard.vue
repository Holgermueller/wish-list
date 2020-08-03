<template>
  <div id="dashboard">
    <h1>This is the dashboard</h1>

    <AddItem />

    <ListFilter />

    <v-layout class="progress">
      <v-flex class="tet-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"
        ></v-progress-circular>
      </v-flex>
    </v-layout>

    <ListDisplay
      v-for="(listItem, index) in getWishList"
      :key="listItem.itemId"
      :index="index"
      :artist="listItem.artist"
      :id="listItem.itemId"
    />
  </div>
</template>

<script>
import ListFilter from "./DashboardLayout/ListFilter";
import AddItem from "./DashboardLayout/AddItemDialog";
import ListDisplay from "./DashboardLayout/ListDisplay";

export default {
  name: "Dashboard",

  components: {
    AddItem,
    ListFilter,
    ListDisplay,
  },

  created() {
    return this.$store.dispatch("getWishList");
  },

  computed: {
    getWishList() {
      return this.$store.getters.wishList;
    },

    loading() {
      return this.$store.getters.loading;
    },

    error() {
      return this.$store.getters.error;
    },
  },

  methods: {
    onDismissed() {
      this.$store.dispatch("clearError");
    },
  },
};
</script>

<style scoped>
#dashboard {
  margin-bottom: 7%;
}
.progress {
  margin: 1% auto;
}
</style>
