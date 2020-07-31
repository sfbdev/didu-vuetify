<template>
  <div id="planning" class="planning">
    <AddForm />

    <v-card>
      <v-tabs v-model="tab" background-color="white" :grow="true">
        <v-tab>Tüm Görevler</v-tab>
        <v-tab>Tamamlanan Görevler</v-tab>
        <v-tab>Tamamlanmamış Görevler</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card>
            <v-card-text>
              <TodosTable :type="'all'" />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-text>
              <TodosTable :type="'done'" />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-text>
              <TodosTable :type="'undone'" />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
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
    return {
      tab: null,
    };
  },
};
</script>