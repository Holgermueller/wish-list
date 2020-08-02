<template>
  <div id="dashboard">
    <h1>This is the dashboard</h1>

    <ListFilter />

    <AddItem />

    <ListDisplay />
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
    return this.$store.dispatch("getTheList");
  },

  computed: {
    wishList() {
      return this.$store.getters.wishList;
    },

    loading() {
      return this.$store.getters.loading;
    },

    error() {
      return this.$store.getters.error;
    },
  },
};
</script>

<style scoped></style>
