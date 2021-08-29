<template>
  <v-app>
    <div class="text-center">
      Hello World
      {{ value }} - {{userName}}
      <br />
      {{ computedText }}
      <br />
      <br />

      <v-btn depressed color="primary" @click="onClick" style="width: 100px;">
        Click me
      </v-btn>

      <br />
      <br />
      <v-btn depressed color="primary" @click="onClickLogin" style="width: 100px;">
        Login
      </v-btn>
    </div>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
// mapState
// mapAction
// mapMutation
// mapGetters

export default {
  name: "App",
  data: () => ({
    value: 0
  }),
  watch: {
    value(newVal, oldVal) {
      console.log("newVal", newVal);
      console.log("oldVal", oldVal);

      if (newVal > 5) {
        alert("You clicked the button more than 5 times...");
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    onClick() {
      this.value += 1;
    },
    onClickLogin() {
      this.login();
    }
  },
  computed: {
    ...mapState({
      userName: (state) => state.user.userName,
    }),
    computedText() {
      return "Button clicked " + this.value + " time.";
    }
  },
  created() {
    console.log("Created");
  },
  mounted() {
    console.log("Mounted");
  }
};
</script>
