<template>
  <v-app>
    <div class="text-center">
      {{value}}
      <br />
      {{computedText}}
      <br />  
      <br />  

      <v-btn
        depressed
        color="primary"
        @click="onClick"
        style="width: 100px;"
      >
        Click me
      </v-btn>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    value: 0,
  }),
  watch: {
    value(newVal, oldVal) {
      console.log('newVal', newVal);
      console.log('oldVal', oldVal);

      if(newVal > 5) { 
        alert('You clicked the button more than 5 times...');
      }
    }
  },
  methods: {
    onClick() {
      this.value +=1;
    },
  },
  computed: {
    computedText() {
      return 'Button clicked ' + this.value + ' time.'
    }
  },
  created() {
    console.log('Created');
  },
  mounted() {
    console.log('Mounted');
  }
};
</script>
