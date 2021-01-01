<template>
  <app-layout>
    <template #header>
      Edit Person: {{person.last_name}}, {{person.first_name}}
    </template>

    <div class="w-1/2 m-4 overflow-hidden bg-white leading-relaxed text-lg rounded shadow-lg">
      <person-form
        :form="form"
        :errors="errors"
        :loading="sending"
        :edit="true"
        @submit="submit"
        @delete="initDelete"
      />
    </div>
    <div class="w-1/2 m-4 overflow-hidden bg-white leading-relaxed text-lg rounded shadow-lg">
      <person-password-form
        :form="passwordForm"
        :errors="errors"
        :loading="sending"
        @submit="submitPasswordChange"
      />
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "~/Layouts/AppLayout";
import PersonForm from "./Form";
import PersonPasswordForm from "./PasswordForm";

export default {
  components: {
    AppLayout,
    PersonForm,
    PersonPasswordForm
  },
  props: {
    errors: {
      type: Object,
      default: () => {}
    },
    person: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      sending: false,
      form: {
        last_name: this.person.last_name,
        first_name: this.person.first_name,
        username: this.person.username,
        password: this.person.password,
        password_confirmation: this.person.password_confirmation
      },
      passwordForm: {
        current_password: null,
        password: null,
        password_confirmation: null
      }
    };
  },
  methods: {
    submit() {
      console.log("submitted");
      this.sending = true;

      this.$inertia.patch(
        this.route("persons.update", this.person.id),
        this.form,
        {
          onFinish: () => {
            this.sending = false;
          }
        }
      );
    },
    submitPasswordChange() {
      this.$inertia.patch(
        this.route("persons.password.update", this.person.id),
        this.passwordForm,
        {
          onFinish: () => {
            this.sending = false;
          }
        }
      );
    },
    initDelete() {
      console.log("delete");
      this.$inertia.delete(this.route("persons.destroy", this.person.id));
    }
  }
};
</script>
