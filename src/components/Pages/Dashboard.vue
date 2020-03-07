<template>
  <div id="dashboard">
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
