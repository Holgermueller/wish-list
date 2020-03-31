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
              :value="displayName"
              outlined
            ></v-text-field>
            <v-text-field label="email" :value="email" outlined></v-text-field>

            <v-textarea outlined label="Bio"></v-textarea>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn @click="dialog = false">Cancel</v-btn>

          <v-spacer></v-spacer>

          <v-btn :loading="loading" :disabled="loading">SUBMIT</v-btn>
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
      dialog: false
    };
  },

  components: {},

  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style scoped></style>
