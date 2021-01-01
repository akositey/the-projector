<template>
  <app-layout>
    <div class="max-w-3xl text-center ">

      <h1 class="font-bold text-4xl my-6">
        {{ title }}
      </h1>
      <div class="text-xl">{{ description }}</div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "~/Layouts/AppLayout";

export default {
  components: {
    AppLayout
  },
  props: {
    status: { type: [Number, Boolean], default: null }
  },
  computed: {
    title() {
      return {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden"
      }[this.status];
    },
    description() {
      return {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page."
      }[this.status];
    }
  }
};
</script>
