<template>
  <div>
    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="success white--text">Yeni Görev Ekle</v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col class="align-center justify-space-between" cols="12">
              <v-text-field prepend-icon="rate_review" placeholder="Görev Giriniz"></v-text-field>
            </v-col>

            <v-col cols="12" lg="6">
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="Tarih"
                    persistent-hint
                    prepend-icon="event"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" lg="6">
              <v-select :items="items" label="Kategori" prepend-icon="category"></v-select>
            </v-col>
            <v-col cols="12">
              <v-textarea prepend-icon="mdi-text" placeholder="Not Giriniz"></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-slider
                v-model="slider"
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
          <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
      items: ["Okul", "İş", "Hobi", "Sosyal"],
    };
  },
  computed: {},

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>