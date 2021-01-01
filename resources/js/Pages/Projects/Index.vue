<template>
  <app-layout>
    <portal to="other-tasks">
      <li class="py-4">
        <inertia-link
          class="btn-indigo"
          :href="route('projects.create')"
        >
          <span>Create Project</span>
        </inertia-link>
      </li>
      <li class="py-4">
        <inertia-link
          class="btn-green"
          :href="route('persons.create')"
        >
          <span>Create Person</span>
        </inertia-link>
      </li>
    </portal>

    <!-- content -->
    <div class="flex">
      <div class="w-full md:w-5/6 overflow-hidden leading-relaxed text-lg">
        <nav class="md:hidden">
          <portal-target
            name="other-tasks"
            tag="ul"
            class="list-none flex flex-row justify-end space-x-4"
          />
        </nav>

        <table class="w-full my-4 whitespace-no-wrap bg-white">
          <tr class="font-bold text-left">
            <th class="p-4 text-center">
              #
            </th>
            <th class="p-4 text-center">
              Project Name
            </th>
            <th class="p-4 text-center">
              Budget
            </th>
            <th class="p-4 text-center">
              Tasks
            </th>
          </tr>
          <tr
            v-for="(row,i) of projects.data"
            :key="row.id"
            class="border-t hover:bg-gray-100 focus-within:bg-gray-100"
          >
            <td class="p-3 text-center">
              {{ projects.from + i }}
            </td>
            <td class="p-3">
              <inertia-link
                class="hover:text-indigo-600"
                :href="route('projects.edit', row.id)"
                tabindex="-1"
              >
                {{ row.name }}
              </inertia-link>
            </td>
            <td class="p-3 text-right">
              {{ new Intl.NumberFormat('en-US', { maximumFractionDigits: 4 }).format(row.budget) }}
            </td>
            <td class="p-3 text-center">
              <inertia-link
                class="btn-indigo-light btn-sm"
                :href="route('projects.assignments.edit', row.id)"
                tabindex="-1"
              >
                Assignments
              </inertia-link>
            </td>
          </tr>
          <tr v-if="projects.data.length === 0">
            <td
              class="px-6 py-4 border-t text-center"
              colspan="4"
            >
              No projects available.
            </td>
          </tr>
        </table>
        <pagination :links="projects.links" />
      </div>

      <!-- right side bar -->
      <nav class="hidden md:block md:w-1/6 pl-6 flex-shrink-0 border-l leading-relaxed">
        <div class="my-4 text-xs font-bold uppercase text-gray-500 tracking-widest">Other Tasks</div>
        <portal-target
          name="other-tasks"
          tag="ul"
          class="list-none"
        />
      </nav>
    </div>

  </app-layout>
</template>

<script>
import AppLayout from "~/Layouts/AppLayout";
import Pagination from "~/Components/Pagination";

export default {
  props: {
    projects: { type: Object, default: () => {} }
  },
  components: {
    AppLayout,
    Pagination
  },
  data() {
    return {};
  },
  watch: {},
  methods: {}
};
</script>
