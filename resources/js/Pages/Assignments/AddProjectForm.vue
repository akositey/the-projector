<template>
  <form
    @submit.prevent="$emit('submit')"
    class="content-end space-x-1"
  >
    <div class="inline-block">

      <select-input
        v-model="form.project_id"
        class="pr-2 md:w-96"
        label="New Project"
      >
        <option
          v-for="(project,i) of availableProjects"
          :key="i"
          :value="project.id"
        >
          {{ project.code }}, {{ project.name }}
        </option>
      </select-input>
    </div>
    <div class="inline-block ">

      <loading-button
        :disabled="!form.project_id"
        :loading="loading"
        class="btn-green"
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
    availableProjects: {
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
