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
          />
        </v-card-text>
      </v-card>

      <!-- <v-card>
        <v-card-text
          
        >
          {{ }}

          {{  }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn>Delete Post</v-btn>
        </v-card-actions>
      </v-card> -->
    </section>
  </div>
</template>

<script>
import DeleteAccnt from "./DeleteAccount";
import EditUserInfo from "./EditUserInfo";
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
