<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white border-b border-gray-50 shadow-md">
      <!-- Primary Navigation Menu -->
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <!-- Logo -->
            <div class="flex items-center flex-shrink-0">
              <inertia-link :href="route('projects.index')">
                <span class="uppercase text-xs">The</span> <span class="btn-indigo-light px-1 py-1">Projector</span>
              </inertia-link>
            </div>

            <!-- Navigation Links -->
            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <nav-link
                :href="route('projects.index')"
                :active="$page.props.currentRouteName == 'projects.index'"
              >
                Projects
              </nav-link>
            </div>
            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <nav-link
                :href="route('persons.index')"
                :active="$page.props.currentRouteName == 'persons.index'"
              >
                Persons
              </nav-link>
            </div>

          </div>

          <!-- User -->
          <div class="hidden sm:flex">
            <div class="flex items-center justify-items-end pl-4">
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800">
                  Welcome {{ $page.props.user.name }}!
                </div>
              </div>
              <!-- Log Out Link -->
              <form
                method="POST"
                @submit.prevent="logout"
              >
                <nav-link as="button">
                  Logout
                </nav-link>
              </form>
            </div>
          </div>

          <!-- Hamburger -->
          <div class="flex items-center -mr-2 sm:hidden">
            <button
              @click="showDropdownNav = ! showDropdownNav"
              class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg
                class="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  :class="{'hidden': showDropdownNav, 'inline-flex': ! showDropdownNav }"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  :class="{'hidden': ! showDropdownNav, 'inline-flex': showDropdownNav }"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Responsive Navigation Menu -->
      <div
        :class="{'block': showDropdownNav, 'hidden': ! showDropdownNav}"
        class="sm:hidden"
      >
        <div class="py-4 space-y-1 px-4">
          <nav-link
            :responsive="true"
            :href="route('projects.index')"
            :active="$page.props.currentRouteName == 'projects.index'"
          >
            Projects
          </nav-link>
        </div>
        <div class="py-4 space-y-1 px-4">
          <nav-link
            :responsive="true"
            :href="route('persons.index')"
            :active="$page.props.currentRouteName == 'persons.index'"
          >
            Persons
          </nav-link>
        </div>
        <div class="py-4 space-y-1 px-4">
          <form
            method="POST"
            @submit.prevent="logout"
          >
            <nav-link
              :responsive="true"
              as="button"
            >
              Logout
            </nav-link>
          </form>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <main>
      <div
        class="flex-1 max-w-6xl px-4 py-4 md:px-8 m-auto overflow-y-auto"
        scroll-region
      >
        <!-- Page Heading -->
        <header>
          <h1 class="page-header">
            <slot name="header" />
          </h1>
        </header>

        <flash-messages />

        <div class="w-full mx-auto flex">
          <slot />
        </div>
      </div>
    </main>

    <!-- Dropdown Portal -->
    <!-- <portal-target
      name="dropdown"
      slim
    /> -->

  </div>
</template>

<script>
import NavLink from "~/Components/NavLink";
import FlashMessages from "~/Components/FlashMessages";

export default {
  components: {
    NavLink,
    FlashMessages
  },

  data() {
    return {
      showDropdownNav: false
    };
  },

  methods: {
    logout() {
      this.$inertia.post(this.route("logout"));
    }
  }
};
</script>
