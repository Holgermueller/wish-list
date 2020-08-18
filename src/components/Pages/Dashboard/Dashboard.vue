<template>
  <div id="dashboard">
    <AddItem />

    <v-text-field
      prepend-inner-icon="mdi-magnify"
      v-model="searchTerm"
      placeholder="Filter through your list..."
      outlined
      clearable
      class="list-filter"
    ></v-text-field>

    <SortingButtons :getWishList="getWishList" />

    <v-layout class="progress">
      <v-flex class="tet-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"
        ></v-progress-circular>
      </v-flex>
    </v-layout>

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

    <ListDisplay
      v-for="(listItem, index) in filterByName"
      :key="listItem.itemId"
      :index="index"
      :artist="listItem.artist"
      :itemId="listItem.itemId"
      :title="listItem.title"
      :medium="listItem.medium"
      :genre="listItem.genre"
      :publisher="listItem.publisher"
      :priority="listItem.priority"
      :notes="listItem.notes"
      :linkTo="listItem.linkTo"
    />
  </div>
</template>

<script>
import AddItem from "./DashboardLayout/AddItemDialog";
import ListDisplay from "./DashboardLayout/ListDisplay";
import SortingButtons from "./DashboardLayout/SortingButtons";

export default {
  name: "Dashboard",

  data() {
    return {
      searchTerm: "",
    };
  },

  components: {
    AddItem,
    ListDisplay,
    SortingButtons,
  },

  created() {
    return this.$store.dispatch("getWishList");
  },

  computed: {
    getWishList() {
      return this.$store.getters.wishList;
    },

    loading() {
      return this.$store.getters.loading;
    },

    error() {
      return this.$store.getters.error;
    },

    filterByName() {
      if (this.searchTerm) {
        return this.getWishList.filter((listItem) => {
          return (
            listItem.artist
              .toLowerCase()
              .indexOf(this.searchTerm.toLowerCase()) > -1
          );
        });
      } else {
        return this.getWishList;
      }
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
#dashboard {
  margin: 7%;
}
.progress {
  margin: 1% auto;
}

.list-filter {
  width: 75%;
  margin: 8px auto;
}
</style>
