<template>
  <v-app>
    <div>
      <v-navigation-drawer app temporary v-model="drawer">
        <v-list>
          <v-list-item v-for="link of links" :key="link.title" :to="link.url">
            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar app dark color="primary">
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="my-2">
          <v-btn
            v-for="link in links"
            :key="link.title"
            :to="link.url"
            depressed
            large
            color="primary"
          >
            <v-icon left>{{link.icon}}</v-icon>
            {{link.title}}
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
      links: [
        { title: "Login", icon: "mdi-security", url: "/login" },
        { title: "Registration", icon: "mdi-link", url: "/registration" },
        { title: "Orders", icon: "mdi-help-box", url: "/orders" },
        { title: "New ad", icon: "mdi-wifi", url: "/new" },
        { title: "My ads", icon: "mdi-school-outline", url: "/list" },
      ],
    };
  },
};
</script>



<style scoped>
p {
  background-color: #d41010a2;
}
</style>