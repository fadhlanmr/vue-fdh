<template>
  <div>
    <h1>Simple Counter</h1>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['counter'])
  },
  methods: {
    ...mapActions(['increment'])
  }
};
</script>