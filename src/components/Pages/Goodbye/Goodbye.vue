<template>
  <div id="goodbye">
    <v-card class="goodbye-card">
      <v-card-title>
        Goodbye
      </v-card-title>

      <v-card-text>
        We're so sorry to see you go. If you change your mind, feel free to
        create another account.
      </v-card-text>

      <v-divider> </v-divider>

      <v-card-actions>
        <router-link to="/">
          <v-btn block>
            <span class="mdi mdi-home"></span>
            HOME</v-btn
          >
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Goodbye",

  data() {
    return {};
  }
};
</script>

<style scoped>
.goodbye-card {
  width: 55%;
  margin: 15% auto;
}
a {
  width: 100%;
  margin: auto;
  text-decoration: none;
}
</style>
