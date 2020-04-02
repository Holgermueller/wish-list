<template>
  <div id="profile">
    <v-card class="profile-actions">
      <v-card-title> Hello, {{ userInfoToDisplay.displayName }}</v-card-title>

      <v-card-text>
        <div>
          {{ userInfoToDisplay.displayName }}
        </div>

        <div>
          {{ userInfoToDisplay.email }}
        </div>

        <div>Bio will appear here</div>
      </v-card-text>

      <v-card-actions>
        <EditUserInfo
          :displayName="userInfoToDisplay.displayName"
          :email="userInfoToDisplay.email"
          :userId="userInfoToDisplay.userId"
        />

        <DeleteAccnt />
      </v-card-actions>
    </v-card>

    <section class="message-display">
      <v-card>List of user posts will appear here.</v-card>
    </section>
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

.message-display {
  width: 75%;
  margin: 7% auto;
}
</style>
