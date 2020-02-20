<template>
  <div id="formats">
    <h1>Formats appear here.</h1>

    <div class="format-list">
      <v-layout class="progress">
        <v-flex class="text-xs-center">
          <v-progress-circular
            indeterminate
            :width="7"
            :size="70"
            class="primary--text"
            v-if="loading"
          ></v-progress-circular>
        </v-flex>
      </v-layout>

      <v-list style="max-height:600px;" class="overflow-y-auto">
        <!-- <FormatCard
          class="list-card"
          v-for="(singleFormat, index) in groupedFormats"
          :key="index"
          :format="singleFormat.format"
        /> -->
        <h2>{{}}</h2>
        <div v-for="(format, index) in formats" :key="index">
          <p>{{ format }}</p>
          <div
            v-for="(artist, innerIndex) in artists(format)"
            :key="innerIndex"
          >
            {{ artist }}
          </div>
        </div>
      </v-list>
    </div>
  </div>
</template>

<script>
//import FormatCard from "./FormatCard";

export default {
  name: "Formats",

  //components: { FormatCard },

  created() {
    return this.$store.dispatch("getAllInfoFromDb");
  },

  computed: {
    formatList() {
      return this.$store.getters.infoToFilter;
    },

    loading() {
      return this.$store.getters.loading;
    },

    formats() {
      const formats = new Set();
      this.formatList.forEach(format => formats.add(format.format));
      return Array.from(formats);
    }
  },

  methods: {
    artists(format) {
      return this.formatList
        .filter(format => format.artist === format)
        .map(format => format.artist);
    }
  }
};
</script>

<style scoped>
.progress {
  text-align: center;
}
.list-card {
  width: 55%;
  margin: 1% auto;
}
.list-card:last-child {
  margin-bottom: 15%;
}
</style>
