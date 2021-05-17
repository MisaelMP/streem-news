<template>
  <span ref="infiniteScroll" />
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          root: null, // defaults to the browser viewport if not specified or if null
          threshold: "0" // the degree of intersection between the target element and its root (0 - 1)
        };
      }
    }
  },
  data() {
    return {
      observer: null
    }
  },

  mounted() {
    this.observer = new IntersectionObserver(entries => {
      this.handleIntersect(entries[0]);
    }, this.options);

    this.observer.observe(this.$refs.infiniteScroll);
  },

  beforeDestroy() {
    this.observer.disconnect();
  },

  methods: {
    handleIntersect(entry) {
      if (entry.isIntersecting) this.$emit("triggerIntersected");
    }
  }
};
</script>
