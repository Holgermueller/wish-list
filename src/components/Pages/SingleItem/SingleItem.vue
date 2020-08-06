<template>
  <div id="singleItemPage">
    <v-card class="single-item-card">
      <v-card-title>
        <h2>{{ artist }}</h2>
        <v-spacer></v-spacer>
        <EditSingleItem
          :artist="artist"
          :id="id"
          :title="title"
          :medium="medium"
        />
      </v-card-title>

      <v-card-subtitle>
        <h3>
          {{ title }}
        </h3>

        <h3>
          {{ medium }}
        </h3>
        <h3>
          {{ publisher }}
        </h3>
        <h3>
          {{ genre }}
        </h3>
      </v-card-subtitle>

      <v-card-text>
        <div>
          <h4 class="notes-section-header">
            Notes:
          </h4>

          <v-divider></v-divider>

          <div>Notes will appear here</div>
        </div>

        <div>
          <v-divider></v-divider>
          <a href="" class="bold"
            >Get it here!
            <v-icon>mdi-arrow-right-bold</v-icon>
          </a>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn to="/dashboard">Back</v-btn>
        <v-spacer></v-spacer>
        <DeleteSingleItem :artist="artist" :title="title" :id="id" />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import EditSingleItem from "./EditSingleItem";
import DeleteSingleItem from "./DeleteItemDialog";

export default {
  name: "SingleItemPage",

  components: {
    EditSingleItem,
    DeleteSingleItem,
  },

  props: {
    artist: {
      type: String,
    },

    title: {
      type: String,
    },

    medium: {
      type: String,
    },

    publisher: {
      type: String,
    },

    genre: {
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

  methods: {},
};
</script>

<style scoped>
.single-item-card {
  width: 85%;
  margin: 7% auto;
}

.notes-section-header {
  text-decoration: underline;
}

a {
  text-decoration: none;
}
</style>
