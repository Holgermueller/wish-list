<template>
  <div id="dltAcct">
    <v-dialog>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">
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
          <v-btn @click="dialog = false">NO</v-btn>
          <v-btn @click="dialog = false">YES</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style scoped>
.delete-account {
}
</style>
