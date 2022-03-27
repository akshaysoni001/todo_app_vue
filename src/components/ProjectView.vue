<template lang="">
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="project in projects" :key="project.title">
            <v-expansion-panel-header>{{
              project.title
            }}</v-expansion-panel-header>
            <v-expansion-panel-content class="px-4 grey--text">
              <div class="grey--text">Due by: {{ project.due }}</div>
              {{ project.content }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import EventService from "@/services/EventService";
export default {
  data() {
    return {
      projects: [],
    };
  },
  created() {
    EventService.getProjects()
      .then((response) => {
        this.projects = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
