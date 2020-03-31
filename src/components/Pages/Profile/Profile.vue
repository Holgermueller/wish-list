<template>
  <div id="profile">
    <v-card class="profile-actions">
      <v-card-title> Hello, {{ userInfoToDisplay.displayName }}</v-card-title>

      <v-card-text>
        {{ userInfoToDisplay.displayName }}

        {{ userInfoToDisplay.email }}
      </v-card-text>

      <v-card-actions>
        <EditUserInfo
          :displayName="userInfoToDisplay.displayName"
          :email="userInfoToDisplay.email"
        />

        <DeleteAccnt />
      </v-card-actions>
    </v-card>

    <v-card>List of user posts will appear here.</v-card>
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
  },

  computed: {
    userInfoToDisplay() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style scoped>
.profile-actions {
  width: 45%;
  margin: 10% auto;
}
</style>
