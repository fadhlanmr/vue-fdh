<template>
  <div>
    <h1>Simple Dropdown</h1>
    <select>
      <option v-for="project in projects" :key="project.id">{{ project.name }}</option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['projects'])
  }
};
</script>