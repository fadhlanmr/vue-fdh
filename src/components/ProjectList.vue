<template>
  <div>
    <h1>Project List</h1>
    <ul class="project-list">
      <li v-for="project in projects" :key="project.id">
        <router-link :to="'/' + project.id">{{ project.name }}</router-link>
      </li>
    </ul>
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

<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.project-list {
  display: flex;
  justify-content: space-around; /* Distribute items evenly */
  list-style-type: none; /* Remove bullet points */
  padding: 0;
  margin: 0;
}

.project-list li {
  margin: 0 10px; /* Add horizontal margin between items */
}

.project-links a {
  margin-right: 10px;
  text-decoration: none;
  color: purple;
}

.project-links a:hover {
  text-decoration: underline;
}
</style>