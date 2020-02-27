<template>
  <div id="dashboard">
    <Welcome />

    <Form />

    <Recents />
  </div>
</template>

<script>
import Form from "./DashboardLayout/Form";
import Recents from "./DashboardLayout/Recent";
import Welcome from "./DashboardLayout/Welcome";

export default {
  name: "Dashboard",
  components: {
    Form,
    Recents,
    Welcome
  }
};
</script>

<style scoped></style>
