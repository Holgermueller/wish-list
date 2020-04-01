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

        <v-card-text>
          <v-form class="form">
            <v-text-field
              label="Username"
              :placeholder="displayName"
              v-model="displayNameForEdit"
              outlined
            ></v-text-field>
            <v-text-field
              label="email"
              :placeholder="email"
              v-model="emailForEdit"
              outlined
            ></v-text-field>

            <v-textarea
              label="Bio"
              v-model="bioForEdit"
              :placeholder="bioForEdit"
              outlined
            ></v-textarea>
          </v-form>
        </v-card-text>

        <v-layout row v-if="error">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <app-alert
              @dismissed="onDismissed"
              :text="error.message || error"
            ></app-alert>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn @click="dialog = false">Cancel</v-btn>

          <v-spacer></v-spacer>

          <v-btn :loading="loading" :disabled="loading" @click="updateUserInfo"
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
      required: true
    },

    email: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      dialog: false,
      displayNameForEdit: this.displayName,
      emailForEdit: this.email,
      bioForEdit: String(this.bio || "Bio")
    };
  },

  components: {},

  computed: {
    loading() {
      return this.$store.getters.loading;
    },

    error() {
      return this.$store.getters.error;
    },

    bio() {
      if (this.bio) {
        return this.bio;
      } else {
        return null;
      }
    }
  },

  methods: {
    updateUserInfo() {
      this.$store.dispatch("editUserProfile", {
        displayName: this.displayNameForEdit,
        email: this.emailForEdit,
        bio: this.bioForEdit
      });

      this.dialog = false;
    }
  }
};
</script>

<style scoped></style>
