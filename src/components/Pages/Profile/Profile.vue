<template>
  <div id="profile">
    <v-card>
      <EditUserInfo />

      <v-divider></v-divider>

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
#profile {
  width: 45%;
  float: right;
}
</style>
