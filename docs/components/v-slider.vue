<template>
  <div ref="el">
    <div class="position-relative mx-8">
      <div class="ui-slider-handle custom-min"></div>
      <div class="ui-slider-handle custom-max"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Array,
      default: [0, 1, 2, 3, 4]
    },
  },
  mounted() {
    this.range();
  },
  methods: {
    range() {
      // https://jqueryui.com/slider/#range
      // https://api.jqueryui.com/slider/
      const $target = $(this.$refs.el);
      const min = $target.find(".custom-min");
      const max = $target.find(".custom-max");
      const step = this.step;
      const len = step.length - 1;
      $target.slider({
        range: true,
        min: 0,
        max: len,
        values: [0, len],
        create: function () {
          min.text(step[0]);
          max.text(step[len]);
        },
        slide: function (event, ui) {
          min.text(step[ui.values[0]]);
          max.text(step[ui.values[1]]);
        }
      });
    },
  },
}
</script>

<style>
.ui-slider-handle {
  border: 1px solid #000;
  width: 5em !important;
  height: 1.6em !important;
  top: 50%;
  margin-top: -.3em;
  text-align: center;
  margin-left: -2.5em !important;
}
</style>
