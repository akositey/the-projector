<template>
  <app-layout>
    <template #header>
      Create A Person
    </template>

    <div class="w-full my-4 overflow-hidden bg-white leading-relaxed text-lg rounded shadow-lg">
      <person-form
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
import PersonForm from "./Form";

export default {
  components: {
    AppLayout,
    PersonForm
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
        last_name: null,
        first_name: null,
        username: null,
        password: null,
        password_confirmation: null
      }
    };
  },
  methods: {
    submit() {
      console.log("submitted");
      this.sending = true;

      this.$inertia.post(this.route("persons.store"), this.form, {
        onFinish: () => {
          this.sending = false;
        }
      });
    }
  }
};
</script>
