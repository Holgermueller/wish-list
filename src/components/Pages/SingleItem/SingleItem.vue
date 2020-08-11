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
          :publisher="publisher"
          :genre="genre"
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

        <h3>Priority: {{ priority }}</h3>
      </v-card-subtitle>

      <v-card-text>
        <div class="update-priority">
          <UpdatePriority :priority="priority" :id="id" />
        </div>

        <div>
          <section>
            <h4 class="notes-section-header">
              Notes:
            </h4>
            <v-spacer></v-spacer>

            <AddNotes :notes="notes" :id="id" />
          </section>

          <v-divider></v-divider>

          <div class="notes-display">{{ notes }}</div>
        </div>

        <div>
          <v-divider></v-divider>
          <a :href="linkTo" class="bold"
            >Get it here!
            <v-icon>mdi-arrow-right-bold</v-icon>
          </a>
        </div>

        <AddLinkDialog :id="id" :linkTo="linkTo" />
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
import AddLinkDialog from "./AddLink";
import AddNotes from "./AddNotes";
import UpdatePriority from "./UpdatePriority";

export default {
  name: "SingleItemPage",

  components: {
    EditSingleItem,
    DeleteSingleItem,
    AddLinkDialog,
    AddNotes,
    UpdatePriority,
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

    notes: {
      type: String,
    },

    priority: {
      type: String,
    },

    linkTo: {
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

.notes-display {
  margin: 8px auto;
}

a {
  text-decoration: none;
}
</style>
