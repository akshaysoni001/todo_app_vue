<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on" color="green">update</v-icon>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5">Add a new project</span>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false"><v-icon>close</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
              label="Title"
              v-model="project.title"
              prepend-icon="folder"
              :rules="Rules"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="project.content"
              prepend-icon="edit"
              :rules="Rules"
            ></v-textarea>

            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              max-width="290"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  :value="formattedDate"
                  clearable
                  label="due date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :rules="Rules"
                  @click:clear="project.due = null"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="project.due"
                @change="menu2 = false"
              ></v-date-picker>
            </v-menu>

            <v-btn text class="success mx-0 mt-3" @click="submit"
              >Add Project</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog1" v-on="on" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on" color="red">delete</v-icon>
      </template>
      <v-card>Delete Project</v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      project: {
        title: null,
        content: null,
        person: "Akshay",
        status: "ongoing",
        due: null,
      },
      dialog: false,
      loading: false,
      menu2: false,
      Rules: [
        (v) => !!v || "value is required",
        (v) => (v && v.length <= 20) || "value must be less than 20 characters",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        console.log("project added");
        (this.title = ""), (this.content = ""), (this.due = null);
        this.loading = false;
        this.dialog = false;
        console.log("data", this.project);
        this.$emit("projectAdded", this.project);
        this.project.title = null;
        this.project.content = null;
        this.project.due = null;
        this.$refs.form.reset();
      }
    },
  },
  computed: {
    formattedDate() {
      return this.project.due
        ? new Date(this.project.due).toUTCString().substring(0, 16)
        : "";
    },
  },
};
</script>
