<template>
  <div id="listFilter">
    <v-card>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="filterTerm"
                  label="Search through your list..."
                  outlined
                  clearable
                  :rules="[filterThroughList]"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ListFilter",

  data() {
    return {
      filterTerm: "",
    };
  },

  computed: {
    filterThroughList() {
      return this.filterTerm;
    },
  },
};
</script>
