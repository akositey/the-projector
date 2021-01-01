<template>
  <form @submit.prevent="$emit('submit')">
    <div class="grid md:grid-cols-2 gap-8 p-8">
      <text-input
        v-model="form.last_name"
        :error="errors.last_name"
        class="w-full pb-4"
        label="Last Name"
      />
      <text-input
        v-model="form.first_name"
        :error="errors.first_name"
        class="w-full pb-4"
        label="First Name"
      />
      <text-input
        v-model="form.username"
        :error="errors.username"
        class="w-full pb-4"
        label="Username"
      />
      <text-input
        v-if="!edit"
        type="password"
        v-model="form.password"
        :error="errors.password"
        class="w-full pb-4 col-start-1"
        label="Password"
      />
      <text-input
        v-if="!edit"
        type="password"
        v-model="form.password_confirmation"
        :error="errors.password_confirmation"
        class="w-full pb-4"
        label="Confirm Password"
      />
    </div>
    <div
      class="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200"
      :class="edit?'justify-between':'justify-end'"
    >
      <dropdown v-if="edit">
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
        class="btn-green"
        type="submit"
      >
        Save
      </loading-button>
    </div>
  </form>
</template>
<script>
import TextInput from "~/Components/TextInput";
import LoadingButton from "~/Components/LoadingButton";
import Dropdown from "../../Components/Dropdown.vue";
export default {
  components: {
    TextInput,
    LoadingButton,
    Dropdown
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    edit: {
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
