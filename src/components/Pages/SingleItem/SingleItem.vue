<template>
  <div id="singleItemPage">
    <v-sheet>
      <h1>This is the si9ngle item page.</h1>

      <v-btn @click.prevent="deleteFromList">Delete from list</v-btn>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "SingleItemPage",

  data() {
    return {};
  },

  methods: {
    deleteFromList() {
      console.log("click");
    },
  },
};
</script>
