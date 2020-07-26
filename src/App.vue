<template>
  <v-app id="app">
   <Navbar/>
   <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
 
    <!-- <v-footer color="success" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  props: {
    source: String,
  },
  components: {
    Navbar
  },
  data() {
    return {
       drawer: null,
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

