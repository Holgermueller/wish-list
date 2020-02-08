<template>
  <div id="dashboard">
    <h1>This is the dashboard.</h1>

    <Form />

    <Recents />
  </div>
</template>

<script>
import Form from "./DashboardLayout/Form";
import Recents from "./DashboardLayout/Recent";

export default {
  name: "Dashboard",
  components: {
    Form,
    Recents
  }
};
</script>

<style scoped></style>
