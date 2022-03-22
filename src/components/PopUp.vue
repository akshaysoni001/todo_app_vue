<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" dark v-bind="attrs" v-on="on" :loading="false">
          Add Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5">Add a new project</span>
          <v-spacer></v-spacer> 
          <v-btn text @click="dialog=false"><v-icon>close</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="folder"
              :rules="Rules"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
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
                  @click:clear="due = null"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="due"
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
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      dialog: false,
      loading: false,
      menu2: false,
      Rules: [
        v => !!v || 'value is required',
        v => (v && v.length <= 20) || 'value must be less than 20 characters',
      ],
    };
  },
  methods: {
    submit() {
        if (this.$refs.form.validate()){
            this.loading=true
            console.log("project added")
            this.title='',
            this.content= '',
            this.due=null
            this.loading=false
            this.dialog=false
            this.$emit("projectAdded", data=form.data)
        }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? new Date(this.due).toUTCString().substring(0, 16) : "";
    },
  },
};
</script>
