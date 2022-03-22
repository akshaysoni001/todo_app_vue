<template>

  <nav>
    <v-snackbar
      v-model="snackbar"
      :timeout="1800"
      top
      text
      color="primary"
    >
      <span><strong> Awesome! </strong> {{ message }}</span>
      <template v-slot:action="{ on }">
        <v-btn color="blue" text v-bind="on" @click="snackbar = false">
          <v-icon>close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>

    <v-app-bar depressed app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="grey" v-bind="attrs" v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span> Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="indigo">
      <v-row column>
        <v-col class="mt-15 text-center">
          <v-avatar size="100" color="grey">
            <img src="/avatar-1.png" alt="alt" />
          </v-avatar>
          <p class="white--text text-subtitle-1">The Net Ninja</p>
        </v-col>
      </v-row>
      <v-flex class="mt-6 mb-9">
        <Popup @projectAdded="addProject" />
      </v-flex>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "@/components/PopUp";
export default {
  components: { Popup },
  data() {
    return {
      message: '',
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
      ],
      snackbar: false,
    };
  },
  methods: {
    addProject() {
    EventService.postProject()
      .then(response => {
        this.message = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
      this.snackbar=true
    },
  },
};
</script>
