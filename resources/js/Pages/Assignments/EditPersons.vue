<template>
  <app-layout>
    {{project}}
    {{persons}}
  </app-layout>
</template>

<script>
import AppLayout from "~/Layouts/AppLayout";

export default {
  components: {
    AppLayout
  },
  props: {
    project: {
      type: Object,
      default: () => {}
    },
    persons: {
      type: Array,
      default: () => {}
    }
  }
};
</script>
