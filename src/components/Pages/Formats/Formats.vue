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
        <v-expansion-panels
          class="expansion-panel-header"
          inset
          hover
          focusable
        >
          <v-expansion-panel
            v-for="(format, index) in Object.keys(formats)"
            :key="index"
          >
            <v-expansion-panel-header>
              {{ format }}
            </v-expansion-panel-header>

            <v-expansion-panel-content
              v-for="(artist, innerIndex) in formats[format]"
              :key="innerIndex"
            >
              <p>{{ artist }}</p>
              <p></p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Formats",

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
      return this.formatList.reduce((carry, current) => {
        if (
          carry.hasOwnProperty(current.format) &&
          Array.isArray(carry[current.format])
        ) {
          carry[current.format].push(current.artist);
        } else {
          Object.assign(carry, {
            [current.format]: [current.artist]
          });
        }
        return carry;
      }, {});
    }
  }
};
</script>

<style scoped>
.progress {
  text-align: center;
}
.expansion-panel-header {
  width: 55%;
  margin: 1% auto;
}
.expansion-panel-header:last-child {
  margin-bottom: 15%;
}
</style>
