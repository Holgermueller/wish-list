<template>
  <div id="form">
    <v-card class="form-card">
      <v-card-title> <h1>Add an album:</h1> </v-card-title>

      <v-card-text>
        <v-form ref="form">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              label="Artist"
              v-model="artist"
              type="text"
              outlined
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              label="Album Title"
              v-model="album"
              type="text"
              outlined
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              label="Genre"
              v-model="genre"
              type="text"
              outlined
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-text-field
              label="Format"
              v-model="format"
              type="text"
              outlined
            ></v-text-field>
          </v-flex>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn>Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn>Submit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      artist: "",
      album: "",
      genre: "",
      format: ""
    };
  }
};
</script>

<style scoped>
.form-card {
  width: 45%;
  position: absolute;
  margin: 2% 0 7% 5%;
}
</style>
