<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0; /* Light background for better visibility */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  background-color: white;
  padding: 20px;
  margin: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid #ddd;
}

th, td {
  padding: 10px;
  text-align: center;
}

input {
  padding: 5px;
  width: 80%;
  margin: 5px 0;
}
</style>