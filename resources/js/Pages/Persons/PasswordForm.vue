<template>
  <form @submit.prevent="$emit('submit')">
    <div class="grid md:grid-cols-2 gap-8 p-8">
      <text-input
        type="password"
        v-model="form.current_password"
        :error="errors.current_password"
        class="w-full pb-4"
        label="Current Password"
      />
      <text-input
        type="password"
        v-model="form.password"
        :error="errors.password"
        class="w-full pb-4 col-start-1"
        label="New Password"
      />
      <text-input
        type="password"
        v-model="form.password_confirmation"
        :error="errors.password_confirmation"
        class="w-full pb-4"
        label="Confirm New Password"
      />
    </div>
    <div class="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
      <loading-button
        :loading="loading"
        class="btn-indigo"
        type="submit"
      >
        Update Password
      </loading-button>
    </div>
  </form>
</template>

<script>
import TextInput from "~/Components/TextInput";
import LoadingButton from "~/Components/LoadingButton";
export default {
  components: {
    TextInput,
    LoadingButton
  },
  props: {
    loading: {
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
