<template>
  <div class="d-flex flex-column" style="min-height: 100vh">
    <navs></navs>
    <div class="flex-grow-1">
      <slot></slot>
    </div>
    <footers></footers>
  </div>
</template>
<script>
import Navs from "./navs.vue";
import Footers from "./footers.vue";

export default {
  components: {
    Navs,
    Footers
  },
  mounted() {
    const scrollSpy = new bootstrap.ScrollSpy(document.body);
  }
}
</script>
