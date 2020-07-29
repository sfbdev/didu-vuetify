<template>
  <v-data-table :headers="tableHeader" :items="allTodos" sort-by="date" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>All Todos</v-toolbar-title>
      </v-toolbar>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data() {
    return{

    }
  },

  computed: {
    ...mapState({
      allTodos: "todos",
      tableHeader: "header",
    }),
  },

  watch: {},

  created() {},

  methods: {},
};
</script>