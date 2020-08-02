<template>
  <div id="dashboard">
    <h1>This is the dashboard</h1>

    <ListFilter />

    <AddItem />

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
      :key="index"
      :index="index"
      :artist="listItem.artist"
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
    user() {
      return this.$$store.getters.user;
    },

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
.progress {
  margin: 1% auto;
}
</style>
