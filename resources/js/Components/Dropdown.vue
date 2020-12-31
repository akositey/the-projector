<template>
  <div class="relative">
    <div @click="open = ! open">
      <slot name="trigger" />
    </div>

    <!-- Full Screen Dropdown Overlay -->
    <!-- <div
      v-show="open"
      class="fixed inset-0 z-40"
      @click="open = false"
    /> -->

    <div
      v-show="open"
      class=" z-50 mt-2 rounded-md shadow-lg"
      :class="[widthClass, alignmentClasses]"
      style="display: none;"
      @click="open = false"
    >
      <div
        class="rounded-md shadow-xs"
        :class="contentClasses"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: Array,
      default: () => ["py-1", "bg-white"]
    }
  },

  data() {
    return {
      open: false
    };
  },

  created() {
    const closeOnEscape = e => {
      if (this.open && e.keyCode === 27) {
        this.open = false;
      }
    };

    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", closeOnEscape);
    });

    document.addEventListener("keydown", closeOnEscape);
  },
  watch: {
    // open(open){
    //   console.log('is ' + (open?'':'not ')+'open')
    // }
  },

  computed: {
    widthClass() {
      return {
        48: "w-48"
      }[this.width.toString()];
    },

    alignmentClasses() {
      if (this.align == "left") {
        return "origin-top-left left-0";
      } else if (this.align == "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    }
  }
};
</script>
