<template>
  <v-app>
    <div>
      <v-navigation-drawer app temporary v-model="drawer"></v-navigation-drawer>

      <v-toolbar app dark color="primary">
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <v-toolbar-items class="my-2">
          <v-btn depressed large color="primary">
            <v-icon left>mdi-set-right</v-icon>Link One
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-container>
        <router-view></router-view>
      </v-container>
    </div>

    <v-bar app>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </v-bar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
p {
  background-color: #d41010a2;
}
</style>