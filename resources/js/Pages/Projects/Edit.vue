<template>
  <app-layout>
    <template #header>
      Edit Project
    </template>

    <div class="w-full my-4 overflow-hidden bg-white leading-relaxed text-lg rounded shadow-lg">
      <project-form
        :form="form"
        :errors="errors"
        :loading="sending"
        :showDelete="true"
        @submit="submit"
        @delete="initDelete"
      />
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "~/Layouts/AppLayout";
import ProjectForm from "./Form";

export default {
  components: {
    AppLayout,
    ProjectForm
  },
  props: {
    errors: {
      type: Object,
      default: () => {}
    },
    project: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      sending: false,
      form: {
        code: this.project.code,
        name: this.project.name,
        budget: this.project.budget,
        remarks: this.project.remarks
      }
    };
  },
  methods: {
    submit() {
      console.log("submitted");
      this.sending = true;

      this.$inertia.patch(
        this.route("projects.update", this.project.id),
        this.form,
        {
          onFinish: () => {
            this.sending = false;
          }
        }
      );
    },
    initDelete() {
      console.log("delete");
      this.$inertia.delete(this.route("projects.destroy", this.project.id));
    }
  }
};
</script>
