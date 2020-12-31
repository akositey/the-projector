<template>
  <app-layout>
    <template #header>
      Create Project
    </template>

    <div class="w-full my-4 overflow-hidden bg-white leading-relaxed text-lg">
      <project-form
        :form="form"
        :errors="errors"
        :loading="sending"
        @submit="submit"
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
    }
  },
  data() {
    return {
      sending: false,
      form: {
        code: null,
        name: null,
        budget: null,
        remarks: null
      }
    };
  },
  methods: {
    submit() {
      console.log("submitted");
      this.sending = true;

      this.$inertia.post(this.route("projects.store"), this.form, {
        onFinish: () => {
          this.sending = false;
        }
      });
    }
  }
};
</script>
