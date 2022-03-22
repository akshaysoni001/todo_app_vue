<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
    
    <v-row wrap class="mb-3">    
      <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small depressed rounded color="grey--text" @click="sortBy('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span right class="caption text-lowercase">by project name</span>
            </v-btn>
          </template>
          <span>Sorts projects by name</span>
        </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{on}">
      <v-btn small depressed rounded color="grey--text" @click="sortBy('person')" v-on="on">
              <v-icon left small>person</v-icon>
              <span right class="caption text-lowercase">by person</span>
            </v-btn>
      </template>
      <span>Sorts projects by person</span>
    </v-tooltip>
    </v-row>

      <v-card class="pa-3" v-for="project in projects" :key="project.title">
        <v-row row wrap :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="2" sm="4" md="2">
          <div class="text-right">
            <v-chip :class="`${project.status} white--text caption my-2`">
            {{ project.status }}
            </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
  data() {
    return {
      projects: null
    };
  },

  created() {
    EventService.getProjects()
      .then(response => {
        this.projects = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },

};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.ongoing {
    background: #fed330 !important;
  }
  .v-chip.complete {
    background: #3cd1c2 !important;
  }
  .v-chip.overdue {
    background: #fc5c65 !important;
  }
</style>
