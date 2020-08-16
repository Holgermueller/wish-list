<template>
  <div id="singleItemPage">
    <v-card
      :itemid="item.itemId"
      :class="`single-item-card ${item.priority}`"
      outlined
    >
      <v-card-title>
        <h2>Title: {{ item.title }}</h2>
        <v-spacer></v-spacer>
        <EditSingleItem
          :artist="item.artist"
          :itemId="item.itemId"
          :title="item.title"
          :medium="item.medium"
          :publisher="item.publisher"
          :genre="item.genre"
        />
      </v-card-title>

      <v-card-subtitle>
        <h3>Artist/Author: {{ item.artist }}</h3>

        <h3>Medium: {{ item.medium }}</h3>
        <h3>Publisher/Label: {{ item.publisher }}</h3>
        <h3>Genre: {{ item.genre }}</h3>

        <h3 :class="`${item.priority}`">Priority: {{ item.priority }}</h3>
      </v-card-subtitle>

      <v-card-text>
        <div>
          <v-layout row v-if="error">
            <v-flex xs12 sm12 md12 lg12 xl12>
              <app-alert
                @dismissed="onDismissed"
                :text="error.message || error"
              ></app-alert>
            </v-flex>
          </v-layout>
        </div>

        <div class="update-priority">
          <UpdatePriority
            :class="`${item.priority}`"
            :priority="item.priority"
            :itemId="item.itemId"
          />
        </div>

        <v-divider></v-divider>

        <section>
          <div>
            <h4 class="notes-section-header">
              Notes:
            </h4>
          </div>

          <div class="notes-display">{{ item.notes }}</div>
        </section>

        <AddNotes :notes="item.notes" :itemId="item.itemId" />

        <v-divider></v-divider>

        <div>
          <h2 class="link-to" v-if="item.linkTo">
            <a
              :href="item.linkTo"
              :class="`bold ${item.priority}`"
              target="_blank"
              >Get it here!
              <v-icon :class="`${item.priority}`">mdi-arrow-right-bold</v-icon>
            </a>
          </h2>

          <h2 v-else></h2>
        </div>

        <AddLinkDialog :itemId="item.itemId" :linkTo="item.linkTo" />
      </v-card-text>

      <v-card-actions>
        <v-btn to="/dashboard">
          <v-icon left>mdi-arrow-left-bold</v-icon>
          Back</v-btn
        >
        <v-spacer></v-spacer>
        <DeleteSingleItem
          :artist="item.artist"
          :title="item.title"
          :itemId="item.itemId"
        />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import EditSingleItem from "./SingleItemComponents/EditSingleItem";
import DeleteSingleItem from "./SingleItemComponents/DeleteItemDialog";
import AddLinkDialog from "./SingleItemComponents/AddLink";
import AddNotes from "./SingleItemComponents/AddNotes";
import UpdatePriority from "./SingleItemComponents/UpdatePriority";

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
    itemId: {
      type: String,
    },
  },

  data() {
    return {};
  },

  computed: {
    item() {
      return this.$store.getters.singleListItem(this.itemId);
    },

    loading() {
      return this.$store.getters.loading;
    },

    error() {
      return this.$store.getters.error;
    },
  },

  methods: {
    onDismissed() {
      this.$store.dispatch("clearError");
    },
  },
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
