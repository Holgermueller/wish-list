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
    },

    closeDialog() {
      this.dialog = false;
    }
  }
};
</script>

<style scoped></style>
