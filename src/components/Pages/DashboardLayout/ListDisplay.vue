<template>
  <div id="wishListDisplay">
    <!-- <v-hover v-slot:default="{ hover }">
      <v-card :elevation="hover ? 12 : 2" class="entry-card">
        <v-card-title> {{ artist }}, {{ title }} </v-card-title>

        <v-card-subtitle>
          {{ medium }}
        </v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            :to="{
              name: 'SingleItemPage',
              params: {
                id: id,
                artist: artist,
                title: title,
                medium: medium,
              },
            }"
            >See more <v-icon>mdi-arrow-right-bold</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-hover> -->

    <v-card>
      <v-card-title>
        Wish List
        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          preppend-icon="mdi-magnify"
          label="Search through your list..."
          clearable
        >
        </v-text-field>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        show-expand
      >
      </v-data-table>
    </v-card>
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
</style>
