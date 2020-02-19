<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="format-card {'on-hover':hover}"
        :elevation="hover ? 16 : 2"
      >
        <v-card-text class="display-1 card-text">
          {{ format }}
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "FormatCard",

  props: {
    format: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.format-card:hover {
  background-color: darkgray;
}
</style>
