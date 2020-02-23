<template>
  <div>
    <h1>
      {{ artist }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "SingleArtist",

  props: {
    artist: {
      type: String,
      required: true
    }
  }
};
</script>
