<template>
  <div id="editUserInfo">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" block>
          Edit Profile
        </v-btn>
      </template>

      <v-card class="user-info">
        <v-card-title> Edit Profile:</v-card-title>

        <v-divider></v-divider>

        <v-layout row v-if="error">
          <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
        </v-layout>

        <v-card-text>
          <v-form class="form">
            <v-text-field
              label="Username"
              :placeholder="displayName"
              v-model="displayNameForEdit"
              outlined
            ></v-text-field>
            <v-text-field
              label="Email"
              :placeholder="email"
              v-model="emailForEdit"
              outlined
            ></v-text-field>

            <v-textarea
              label="Bio"
              :placeholder="bioForEdit"
              v-model="bioForEdit"
              outlined
            ></v-textarea>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn @click="dialog = false">Cancel</v-btn>

          <v-spacer></v-spacer>

          <v-btn
            :loading="loading"
            :userId="userId"
            :disabled="loading"
            @click="updateUserInfo"
            >SUBMIT</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "UpdateUserInfo",

  props: {
    displayName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
    },

    bio: {
      type: String,
    },

    userProfileId: {
      type: String,
    },
  },

  data() {
    return {
      dialog: false,
      displayNameForEdit: this.displayName,
      emailForEdit: this.email,
      bioForEdit: this.bio,
    };
  },

  components: {},

  created() {
    return this.$store.dispatch("getUserProfileFromDB");
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },

    error() {
      return this.$store.getters.error;
    },
  },

  methods: {
    updateUserInfo() {
      this.$store.dispatch("editUserProfile", {
        userId: this.userProfileId,
        displayName: this.displayNameForEdit,
        email: this.emailForEdit,
        bio: this.bioForEdit,
      });

      this.dialog = false;
    },

    onDismissed() {
      this.$store.dispatch("clearError");
    },
  },
};
</script>

<style scoped></style>
