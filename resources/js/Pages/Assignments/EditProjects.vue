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
    person: {
      type: Object,
      default: () => {}
    },
    projects: {
      type: Array,
      default: () => {}
    }
  }
};
</script>
