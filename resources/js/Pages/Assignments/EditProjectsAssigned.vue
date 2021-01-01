<template>
  <app-layout>
    <template #header>
      Person Assignments - {{person.first_name}} {{person.last_name}}
    </template>
    <div class="max-w-3xl m-auto p-6 m-4 overflow-hidden bg-white leading-relaxed text-lg rounded shadow-lg">

      <!-- Add Projects dropdown -->
      <add-project-form
        :form="form"
        :loading="sending"
        :availableProjects="availableProjects"
        @submit="addProject"
      />
      <!--Current Projects -->
      <h3 class="my-6">Current Projects:</h3>
      <div
        v-for="(project,i) in assignedProjects"
        :key="i"
        class="flex flex-row border-t w-full hover:bg-gray-50"
      >
        <div class="w-3/4 p-2">{{project.code}} {{project.name}}</div>
        <div class="w-1/4 p-2">
          <button
            class="btn-red-light btn-sm"
            @click="removeProject(project.id)"
          >Remove</button>
        </div>
      </div>

    </div>
  </app-layout>
</template>

<script>
import AppLayout from "~/Layouts/AppLayout";
import SelectInput from "~/Components/SelectInput.vue";
import LoadingButton from "../../Components/LoadingButton.vue";
import AddProjectForm from "./AddProjectForm.vue";

export default {
  components: {
    AppLayout,
    SelectInput,
    LoadingButton,
    AddProjectForm
  },
  props: {
    person: {
      type: Object,
      default: () => {}
    },
    availableProjects: {
      type: [Array, Object],
      default: () => {}
    },
    assignedProjects: {
      type: [Array, Object],
      default: () => {}
    }
  },
  data() {
    return {
      sending: false,
      form: {
        person: this.person.id,
        project_id: null
      }
    };
  },
  methods: {
    addProject() {
      this.sending = true;
      this.$inertia.post(
        this.route("persons.assignments.store", this.person.id),
        this.form,
        {
          onFinish: () => {
            this.sending = false;
            this.form.project_id = null;
          }
        }
      );
    },
    removeProject(id) {
      this.$inertia.delete(
        this.route("persons.assignments.destroy", {
          person: this.person.id,
          project: id
        })
      );
    }
  }
};
</script>
