<template>
  <div id="pageHeader">
    <v-card class="page-header">
      <v-card-title>
        {{ message }}
      </v-card-title>

      <v-card-subtitle
        >{{ displayNameOfPoster }}

        <v-spacer></v-spacer>

        {{ dateMessageAdded }}
      </v-card-subtitle>

      <v-card-text>Replies: </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "PageHeader",

  props: {
    displayNameOfPoster: {
      type: String,
    },

    message: {
      type: String,
    },

    dateMessageAdded: {
      type: String,
    },
  },
};
</script>

<style scoped>
.page-header {
  width: 75%;
  margin: 5% auto 0;
}
</style>
