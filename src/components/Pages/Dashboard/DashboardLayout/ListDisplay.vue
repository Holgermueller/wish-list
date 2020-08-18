<template>
  <div id="wishListDisplay">
    <v-hover v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 12 : 2"
        :class="`entry-card ${priority}`"
        outlined
      >
        <v-card-title>
          {{ artist }}

          <v-spacer></v-spacer>

          <v-btn
            :itemid="itemId"
            :class="`${priority}`"
            :to="'/singleItem/' + itemId"
            >See more <v-icon>mdi-arrow-right-bold</v-icon></v-btn
          >
        </v-card-title>

        <v-card-subtitle>
          {{ title }},
          {{ medium }}
        </v-card-subtitle>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "WishListDisplay",

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

    genre: {
      type: String,
    },

    publisher: {
      type: String,
    },

    priority: {
      type: String,
    },

    itemId: {
      type: String,
    },

    notes: {
      type: String,
    },

    linkTo: {
      type: String,
    },
  },

  computed: {
    error() {
      return this.$store.getters.error;
    },
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.entry-card {
  width: 75%;
  margin: 2px auto;
}

.entry-card:hover {
  background-color: lightslategray;
}

.v-card.Whenever {
  border-color: #00bfff;
  border-left-width: 8px;
}

.v-card.Now {
  border-color: #b22222;
  border-left-width: 8px;
}

.v-card.Soon {
  border-color: #228b22;
  border-left-width: 8px;
}

.v-btn.Whenever {
  background-color: #00bfff !important;
}

.v-btn.Now {
  background-color: #b22222 !important;
}

.v-btn.Soon {
  background-color: #228b22 !important;
}
</style>
