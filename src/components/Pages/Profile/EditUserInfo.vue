<template>
  <div id="editUserInfo">
    <v-card class="user-info">
      <v-card-title> Hello, {{ userInfoToDisplay.displayName }} </v-card-title>

      <v-form>
        <v-text-field
          :value="userInfoToDisplay.displayName"
          outlined
        ></v-text-field>
        <v-text-field :value="userInfoToDisplay.email" outlined></v-text-field>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "UpdateUserInfo",

  computed: {
    userInfoToDisplay() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style scoped>
.user-info {
}
</style>
