<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>Görev</th>
          <th>Tarih</th>
          <th>Kategori</th>
          <th>Öncelik</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-left" v-for="todo in data" :key="todo.id">
          <td>{{ todo.text }}</td>
          <td>{{ todo.date }}</td>
          <td>{{ todo.category }}</td>
          <td>{{ todo.priority }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  props: ["type"],
  data() {
    return {};
  },

  computed: {
    ...mapState({
      allTodos: "todos",
      tableHeader: "header",
    }),
    data() {
      return this.type == "done"
        ? this.doneTodos
        : this.type == "undone"
        ? this.undoneTodos
        : this.allTodos;
    },

    doneTodos() {
      return this.allTodos.filter((item) => {
        return item.done == true;
      });
    },
    undoneTodos() {
      return this.allTodos.filter((item) => {
        return item.done != true;
      });
    },
  },

  watch: {},

  created() {},

  methods: {},
};
</script>