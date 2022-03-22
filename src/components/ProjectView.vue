<template lang="">
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="project in projects" :key="project.title">
            <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="px-4 grey--text">
            <div class="grey--text">Due by: {{project.due}}</div>
            {{project.content}}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {

            projects: [
        {
          title: "Native Sla Monitor",
          person: "Akshay Soni",
          content: "Upgraded Vista Project",
          due: "Jan 2022",
          status: "ongoing",
        },
        {
          title: "Vista",
          person: "Sandeep",
          due: "Jan 2020",
          content: "Orignal Vista Project",
          status: "complete",
        },
        {
          title: "Akshay",
          person: "Arshad",
          content: "Vuetify Project",
          due: "Jan 2020",
          status: "overdue",
        }]
        }
    },
};
</script>
