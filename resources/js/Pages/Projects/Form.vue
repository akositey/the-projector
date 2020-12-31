<template>
  <form @submit.prevent="$emit('submit')">
    <div class="flex flex-wrap p-8 -mb-8 -mr-6">
      <text-input
        v-model="form.code"
        :error="errors.code"
        class="w-full pb-6 pr-4 lg:w-1/2"
        label="Code"
      />
      <text-input
        v-model="form.name"
        :error="errors.name"
        class="w-full pb-6 pr-4 lg:w-1/2"
        label="Name"
      />
      <text-input
        type="number"
        v-model="form.budget"
        :error="errors.budget"
        class="w-full pb-6 pr-4 lg:w-1/2"
        label="Budget"
      />
      <textarea-input
        v-model="form.remarks"
        :error="errors.remarks"
        class="w-full pb-6 pr-4 lg:w-1/2"
        label="Remarks"
      />
    </div>
    <div class="flex items-center justify-between px-8 py-4 bg-gray-100 border-t border-gray-200">
      <dropdown v-if="showDelete">
        <template #trigger>
          <button
            class="btn-red"
            tabindex="-1"
            type="button"
          >
            Delete
          </button>
        </template>
        <template #content>
          <button
            type="button"
            class="text-sm py-2 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-red-800"
            @click="$emit('delete')"
          >
            Confirm Delete
          </button>
        </template>
      </dropdown>
      <loading-button
        :loading="loading"
        class="btn-indigo"
        type="submit"
      >
        Save
      </loading-button>
    </div>
  </form>
</template>
<script>
import TextInput from "~/Components/TextInput";
import TextareaInput from "~/Components/TextareaInput";
import LoadingButton from "~/Components/LoadingButton";
import Dropdown from "../../Components/Dropdown.vue";
export default {
  components: {
    TextInput,
    TextareaInput,
    LoadingButton,
    Dropdown
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    showDelete: {
      type: Boolean,
      default: false
    },
    form: {
      type: Object,
      default: () => {}
    },
    errors: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  }
};
</script>
