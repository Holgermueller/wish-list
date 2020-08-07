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
            :to="{
              name: 'SingleItemPage',
              params: {
                id: id,
                artist: artist,
                title: title,
                medium: medium,
                genre: genre,
                publisher: publisher,
                priority: priority,
              },
            }"
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

    id: {
      type: String,
    },
  },

  data() {
    return {
      search: "",
      headers: [
        {
          text: "Artist",
          align: "start",
          sortable: true,
          value: "artist",
        },
        {
          text: "Title",
          sortable: true,
          value: "title",
        },
        {
          text: "Format",
          sortable: false,
          value: "medium",
        },
      ],

      items: [
        {
          artist: this.artist,
          title: this.title,
          medium: this.medium,
        },
      ],
    };
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

.Whenver {
  border-left-color: 4px solid success !important;
  color: red;
}
</style>
