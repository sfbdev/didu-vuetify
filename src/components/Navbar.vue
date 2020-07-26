<template>
  <div>
   <v-navigation-drawer
      v-model="drawer"
      app
      color="success"
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon class="white--text">dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link class="white--text text-decoration-none" :to="'/'">Dashboard</router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon class="white--text">event</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link :to="'/planning'" class="white--text text-decoration-none">Planning</router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="success"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
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
  }
</script>