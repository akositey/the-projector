<template>
  <app-layout>
    <!-- Add Members dropdown -->
    <form
      @submit.prevent="addMember"
      class="flex"
    >
      <select-input
        v-model="form.persons"
        class="pr-6"
        label="New Member"
      >
        <option
          v-for="(person,i) of availablePersons"
          :key="i"
          :value="person.id"
        >
          {{ person.last_name }}, {{ person.first_name }}
        </option>
      </select-input>
      <loading-button
        :loading="sending"
        class="btn-indigo"
        type="submit"
      >
        Add
      </loading-button>
    </form>

    <!-- Current Members -->
  </app-layout>
</template>

<script>
import AppLayout from "~/Layouts/AppLayout";
import SelectInput from "~/Components/SelectInput.vue";
import LoadingButton from "../../Components/LoadingButton.vue";

export default {
  components: {
    AppLayout,
    SelectInput,
    LoadingButton
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
        persons: this.availablePersons
      }
    };
  }
};
</script>
