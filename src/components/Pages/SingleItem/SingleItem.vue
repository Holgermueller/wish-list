<template>
  <div id="singleItemPage">
    <v-sheet>
      <h1>This is the si9ngle item page.</h1>

      <h2>{{ artist }}</h2>

      <v-btn @click.prevent="deleteFromList">Delete from list</v-btn>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "SingleItemPage",

  props: {
    artist: {
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
