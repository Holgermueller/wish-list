<template>
  <div id="dashboard">
    <h1>This is the dashboard</h1>

    <ListFilter />

    <AddItem />
  </div>
</template>

<script>
import ListFilter from "./DashboardLayout/ListFilter";
import AddItem from "./DashboardLayout/AddItemDialog";

export default {
  name: "Dashboard",

  components: {
    AddItem,
    ListFilter,
  },

  created() {
    return this.$store.dispatch("getTheList");
  },
};
</script>

<style scoped></style>
