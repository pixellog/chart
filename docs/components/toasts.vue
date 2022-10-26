<template>
  <div id="toasts"
       style="z-index: 100;"
       data-bs-delay="4000"
       class="toast position-fixed bottom-0 mb-10 start-50 translate-middle-x align-items-center text-bg-dark border-0" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex">
      <div class="toast-body">
        {{ value }}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: 'message'
    },
  },
}
</script>

<style scoped>

</style>
