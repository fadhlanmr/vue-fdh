<template>
  <div>
    <h1>Editable Table</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Value</th>
      </tr>
      <tr v-for="item in tableData" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td><input v-model="item.value" @change="editItem(item)" /></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['tableData'])
  },
  methods: {
    ...mapActions(['editTable']),
    editItem(item) {
      this.editTable({ id: item.id, value: item.value });
    }
  }
};
</script>