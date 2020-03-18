<template>
  <div id="profile">
    <v-card class="profile-actions">
      <EditUserInfo />

      <DeleteAccnt />
    </v-card>
  </div>
</template>

<script>
import DeleteAccnt from "./DeleteAccount";
import EditUserInfo from "./EditUserInfo";

export default {
  name: "Profile",

  components: {
    DeleteAccnt,
    EditUserInfo
  }
};
</script>

<style scoped>
.profile-actions {
  width: 45%;
  margin: 10% auto;
}
</style>
