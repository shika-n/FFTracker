<template>
  <v-app>
    <v-app-bar :clipped-left="true" fixed app>
      <v-toolbar-title>
        <strong class="primary--text">
          Twifer
        </strong>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="mx-2">
        <v-avatar size="48" :color="`secondary`">
          <span class="white--text font-weight-black headline">US</span>
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <v-bottom-navigation v-if="isSmallDevice()" fixed grow app>
      <v-btn v-for="item in drawerItems" :key="item.text" :to="item.to">
        <span>{{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-navigation-drawer
      v-if="!isSmallDevice()"
      :mini-variant="drawerShrinked && !isSmallDevice()"
      :clipped="true"
      fixed
      app
    >
      <v-list>
        <v-list-item @click.stop="drawerShrinked = !drawerShrinked">
          <v-list-item-action>
            <v-icon>
              mdi-{{ `chevron-${drawerShrinked ? "right" : "left"}` }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Collapse
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in drawerItems"
          :key="item.text"
          :to="item.to"
          router
        >
          <v-list-item-action>
            <v-icon :color="`accent`">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            {{ item.text }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
html {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>

<script>
export default {
  data() {
    return {
      drawerShrinked: true,
      drawerItems: [
        {
          icon: "mdi-home",
          text: "Home",
          to: "/dashboard",
        },
        {
          icon: "mdi-heart",
          text: "Favorites",
          to: "/favorites",
        },
        {
          icon: "mdi-account-arrow-right",
          text: "Following",
          to: "/following",
        },
        {
          icon: "mdi-account-arrow-left",
          text: "Followers",
          to: "/followers",
        },
      ],
    };
  },
  methods: {
    isSmallDevice() {
      return (
        this.$vuetify.breakpoint.md ||
        this.$vuetify.breakpoint.sm ||
        this.$vuetify.breakpoint.xs
      );
    },
  },
};
</script>
