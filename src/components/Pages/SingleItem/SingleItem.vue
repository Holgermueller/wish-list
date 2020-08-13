<template>
  <div id="singleItemPage">
    <v-card :class="`single-item-card ${priority}`" outlined>
      <v-card-title>
        <h2>Title: {{ title }}</h2>
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
        <h3>Artist/Author: {{ artist }}</h3>

        <h3>Medium: {{ medium }}</h3>
        <h3>Publisher: {{ publisher }}</h3>
        <h3>Genre: {{ genre }}</h3>

        <h3 :class="`${priority}`">Priority: {{ priority }}</h3>
      </v-card-subtitle>

      <v-card-text>
        <div class="update-priority">
          <UpdatePriority
            :class="`${priority}`"
            :priority="priority"
            :id="id"
          />
        </div>

        <v-divider></v-divider>

        <section>
          <div>
            <h4 class="notes-section-header">
              Notes:
            </h4>
          </div>

          <div class="notes-display">{{ notes }}</div>
        </section>

        <AddNotes :notes="notes" :id="id" />

        <v-divider></v-divider>

        <div>
          <h2 class="link-to" v-if="linkTo">
            <a :href="linkTo" class="bold" target="_blank"
              >Get it here!
              <v-icon>mdi-arrow-right-bold</v-icon>
            </a>
          </h2>

          <h2 v-else></h2>
        </div>

        <AddLinkDialog :id="id" :linkTo="linkTo" />
      </v-card-text>

      <v-card-actions>
        <v-btn to="/dashboard">
          <v-icon left>mdi-arrow-left-bold</v-icon>
          Back</v-btn
        >
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

.v-divider {
  margin: 8px;
}

.notes-section-header {
  text-decoration: underline;
  margin: 8px;
}

.notes-display {
  margin: 8px;
  padding: 8px;
  background-color: slategrey;
  border-radius: 15px;
}

.link-to {
  margin: 8px;
}

a {
  text-decoration: none;
}

.Soon {
  color: #228b22;
  border-color: #228b22;
  border-width: 2px;
}

.Whenever {
  color: #00bfff;
  border-width: 2px;
  border-color: #00bfff;
}

.Now {
  color: #b22222;
  border-color: #b22222;
  border-width: 2px;
}
</style>
