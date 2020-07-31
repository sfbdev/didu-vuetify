<template>
  <div>
    <v-navigation-drawer v-model="drawer" app color="success">
      <v-list dense>
        <v-list-item link v-for="(item, index) in routes" :key="index">
          <v-list-item-action>
            <v-icon class="white--text">{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link class="white--text text-decoration-none" :to="item.path">
            {{item.name}}</router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="success" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Görev Takip v1.0.0</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>