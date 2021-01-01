<template>
  <form
    @submit.prevent="$emit('submit')"
    class="content-end space-x-1"
  >
    <div class="inline-block">

      <select-input
        v-model="form.person_id"
        class="pr-2 md:w-96"
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
    </div>
    <div class="inline-block ">

      <loading-button
        :loading="loading"
        class="btn-indigo"
        type="submit"
      >
        Add
      </loading-button>
    </div>
  </form>
</template>

<script>
import LoadingButton from "~/Components/LoadingButton.vue";
import SelectInput from "~/Components/SelectInput.vue";

export default {
  components: {
    LoadingButton,
    SelectInput
  },
  props: {
    availablePersons: {
      type: [Object, Array],
      default: () => {}
    },
    form: {
      type: Object,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
