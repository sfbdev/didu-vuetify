<template>
  <div id="planning" class="planning">
    <TodosTable />
    <AddForm />
  </div>
</template>

<script>
import TodosTable from "@/components/TodosTable.vue";
import AddForm from "@/components/AddForm.vue";

export default {
  components: {
    TodosTable,
    AddForm,
  },
  name: "Planning",
  data() {
    return {};
  },
};
</script>