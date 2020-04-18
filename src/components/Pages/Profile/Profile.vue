<template>
  <div id="profile">
    <v-card
      class="profile-actions"
      v-for="(userProfile, index) in getUserInfoFromDB"
      :key="index"
    >
      <v-card-title>Hello, {{ userProfile.displayName }}</v-card-title>

      <v-card-text>
        <div>Username: {{ userProfile.displayName }}</div>

        <div>Email: {{ userProfile.email }}</div>

        <div>Bio: {{ userProfile.bio }}</div>
      </v-card-text>

      <v-card-actions>
        <EditUserInfo
          :displayName="userProfile.displayName"
          :email="userProfile.email"
          :userId="userProfile.userId"
          :bio="userProfile.bio"
        />

        <DeleteAccnt />
      </v-card-actions>
    </v-card>

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

    <section class="message-display">
      <v-card>
        <v-card-title>
          Your messages:
        </v-card-title>

        <v-card-text>
          <UserPosts
            v-for="(message, index) in getMessagesForSingleUser"
            :key="index"
            :message="message.message"
            :displayNameOfPoster="message.displayNameOfPoster"
            :dateAdded="message.dateAdded.toDate().toDateString()"
            :messageId="message.messageId"
            :messages="getMessagesForSingleUser"
            :index="index"
          />
        </v-card-text>
      </v-card>
    </section>
  </div>
</template>

<script>
import DeleteAccnt from "./ProfileActions/DeleteAccount";
import EditUserInfo from "./ProfileActions/EditUserInfo";
import UserPosts from "./UserPosts";

export default {
  name: "Profile",

  components: {
    DeleteAccnt,
    EditUserInfo,
    UserPosts,
  },

  created() {
    return this.$store.dispatch("getMessagesForSingleUser");
  },

  computed: {
    userInfoToDisplay() {
      return this.$store.getters.user;
    },

    getUserInfoFromDB() {
      return this.$store.getters.userProfileInfo;
    },

    getMessagesForSingleUser() {
      return this.$store.getters.messages;
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
