<template>
  <div id="singleItemPage">
    <v-card>
      <v-card-title>
        <h2>{{ artist }}</h2>
      </v-card-title>

      <v-card-subtitle>
        <h3>
          {{ title }}
        </h3>
      </v-card-subtitle>

      <v-card-text>
        <h4>
          Notes:
        </h4>
      </v-card-text>

      <v-card-actions>
        <v-btn to="/dashboard">Back</v-btn>
        <v-spacer></v-spacer>
        <v-btn @click.prevent="deleteFromList">Delete from list</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SingleItemPage",

  props: {
    artist: {
      type: String,
    },

    title: {
      type: String,
    },

    id: {
      type: String,
    },
  },

  data() {
    return {};
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
    deleteFromList() {
      this.$store.dispatch("removeItemFromList", {
        itemId: this.id,
      });

      this.$router.push("/dashboard");
    },
  },
};
</script>
