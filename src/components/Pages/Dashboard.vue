<template>
  <div id="dashboard">
    <AddItem />

    <div>
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        v-model="searchTerm"
        placeholder="Filter through your list..."
        outlined
        clearable
        class="list-filter"
      ></v-text-field>
    </div>

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

    <ListDisplay
      v-for="(listItem, index) in filterByName"
      :key="listItem.itemId"
      :index="index"
      :artist="listItem.artist"
      :id="listItem.itemId"
      :title="listItem.title"
      :medium="listItem.medium"
      :genre="listItem.genre"
      :publisher="listItem.publisher"
      :priority="listItem.selectedPriority"
    />
  </div>
</template>

<script>
import AddItem from "./DashboardLayout/AddItemDialog";
import ListDisplay from "./DashboardLayout/ListDisplay";

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
      return this.getWishList.filter((listItem) => {
        return (
          listItem.artist.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >
          -1
        );
      });
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
  margin-bottom: 7%;
}
.progress {
  margin: 1% auto;
}

.list-filter {
  width: 75%;
  margin: 2% auto;
}
</style>
