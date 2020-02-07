<template>
  <div id="Home">
    <LoginRegistrationForms />
  </div>
</template>

<script>
import LoginRegistrationForms from "./LoginRegistration/LoginRegistration";

export default {
  name: "Home",

  components: {
    LoginRegistrationForms
  },

  data() {
    return {};
  }
};
</script>
