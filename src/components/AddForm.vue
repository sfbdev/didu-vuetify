<template>
  <div>
    <v-btn bottom color="pink" dark fab fixed right @click="openForm = !openForm">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="openForm" width="800px">
      <v-card>
        <v-card-title class="success white--text">Yeni Görev Ekle</v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col class="align-center justify-space-between" cols="12">
              <v-text-field
                v-model="newTodo.text"
                prepend-icon="rate_review"
                placeholder="Görev Giriniz"
              ></v-text-field>
            </v-col>

            <v-col cols="12" lg="6">
              <v-menu
                ref="openDatePicker"
                v-model="openDatePicker"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="newTodo.date"
                    label="Tarih"
                    persistent-hint
                    prepend-icon="event"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="newTodo.date" no-title @input="openDatePicker = false"></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" lg="6">
              <v-select
                v-model="newTodo.category"
                :items="items"
                label="Kategori"
                prepend-icon="category"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="newTodo.description"
                prepend-icon="mdi-text"
                placeholder="Not Giriniz"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-slider
                v-model="newTodo.priority"
                class="align-center"
                prepend-icon="thumb_down"
                append-icon="thumb_up"
                label="Priority"
                :max="10"
                :min="0"
                hide-details
              ></v-slider>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn text color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="openForm = false">Cancel</v-btn>
          <v-btn text @click="trySaveTodo()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      openForm: false,
      items: ["Okul", "İş", "Hobi", "Sosyal"],
      openDatePicker: null,
      newTodo: {
        text: null,
        description: null,
        date: new Date().toISOString().substr(0, 10),
        done: false,
        category: null,
        priority: null,
      },
    };
  },
  computed: {},

  methods: {
    ...mapActions(["saveTodo"]),
    trySaveTodo() {
      this.saveTodo(this.newTodo);
    },
  },
};
</script>