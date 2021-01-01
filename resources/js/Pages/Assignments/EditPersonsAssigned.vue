<template>
  <app-layout>
    <template #header>
      Project Assignments - {{project.name}},
    </template>
    <div class="max-w-3xl m-auto p-6 m-4 overflow-hidden bg-white leading-relaxed text-lg rounded shadow-lg">

      <!-- Add Members dropdown -->
      <add-member-form
        :form="form"
        :loading="sending"
        :availablePersons="availablePersons"
        @submit="addMember"
      />
      <!--Current Members -->
      <h3 class="my-6">Current Members:</h3>
      <div
        v-for="(person,i) in assignedPersons"
        :key="i"
        class="flex flex-row border-t w-full hover:bg-gray-50"
      >
        <div class="w-3/4 p-2">{{person.first_name}} {{person.last_name}}</div>
        <div class="w-1/4 p-2">
          <button
            class="btn-red-light btn-sm"
            @click="removeMember(person.id)"
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
import AddMemberForm from "./AddMemberForm.vue";

export default {
  components: {
    AppLayout,
    SelectInput,
    LoadingButton,
    AddMemberForm
  },
  props: {
    project: {
      type: Object,
      default: () => {}
    },
    availablePersons: {
      type: [Array, Object],
      default: () => {}
    },
    assignedPersons: {
      type: [Array, Object],
      default: () => {}
    }
  },
  data() {
    return {
      sending: false,
      form: {
        project: this.project.id,
        person_id: null
      }
    };
  },
  methods: {
    addMember() {
      this.sending = true;
      this.$inertia.post(
        this.route("projects.assignments.store", this.project.id),
        this.form,
        {
          onFinish: () => {
            this.sending = false;
            this.form.person_id = null;
          }
        }
      );
    },
    removeMember(id) {
      this.$inertia.delete(
        this.route("projects.assignments.destroy", {
          project: this.project.id,
          person: id
        })
      );
    }
  }
};
</script>
