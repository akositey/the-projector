<template>
  <button
    :class="classes"
    class="w-full text-left"
    v-if="as == 'button'"
  >
    <slot></slot>
  </button>

  <inertia-link
    :href="href"
    :class="classes"
    v-else
  >
    <slot></slot>
  </inertia-link>
</template>

<script>
export default {
  props: ["href", "active", "as", "responsive"],

  computed: {
    classes() {
      if (this.reponsive) {
        return this.active
          ? "block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
          : "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out";
      }

      return this.active
        ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
        : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out";
    }
  }
};
</script>
