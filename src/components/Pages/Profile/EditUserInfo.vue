<template>
  <div id="editUserInfo">
    <v-card class="user-info">
      <v-card-title> Hello, {{ userInfoToDisplay.displayName }} </v-card-title>

      <v-card-text>
        <v-form class="form">
          <v-text-field
            :value="userInfoToDisplay.displayName"
            outlined
          ></v-text-field>
          <v-text-field
            :value="userInfoToDisplay.email"
            outlined
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn block>SUBMIT</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "UpdateUserInfo",

  components: {},

  computed: {
    userInfoToDisplay() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style scoped></style>
