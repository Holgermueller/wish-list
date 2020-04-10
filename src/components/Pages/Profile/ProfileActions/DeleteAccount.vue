<template>
  <div id="dltAcct">
    <v-dialog v-model="dialog" class="delete-account" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" block="">
          Delete Account
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Are you sure you want to delete your account?
        </v-card-title>

        <v-card-subtitle>
          This action cannot be reversed.
        </v-card-subtitle>

        <v-layout row v-if="error">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <app-alert
              @dismissed="onDismissed"
              :text="error.message || error"
            ></app-alert>
          </v-flex>
        </v-layout>

        <v-card-actions>
          <v-btn @click="dialog = false">
            <span class="mdi mdi-cancel"></span>
            NO</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="deleteUser"
            :loading="loading"
            :disabled="loading"
            >YES</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "DeleteUser",

  data() {
    return {
      dialog: false
    };
  },

  computed: {
    error() {
      return this.$store.getters.error;
    },

    loading() {
      return this.$store.getters.loading;
    }
  },

  methods: {
    deleteUser() {
      this.$store.dispatch("deleteUser");
      this.closeDialog();
      this.goToGoodbyePage();
    },

    goToGoodbyePage() {
      this.$router.push({
        name: "Goodbye",
        query: {
          redirect: "/goodbye"
        }
      });
    },

    closeDialog() {
      this.dialog = false;
    },

    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>

<style scoped></style>
