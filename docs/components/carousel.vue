<template>
  <div class="counter-number">
    <ul ref="target" class="counter-ul"></ul>
  </div>
</template>

<script>
/**
 * value: { number } 숫자 값
 * unit: { string } 단위, 혹은 i18n key (i81n value가 '{n}개' 와 같은 형식으로 사용해야 함 )
 * locale: { boolean } i18n 적용 여부
 */
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      default: '',
    },
    locale: {
      type: Boolean,
      default: false,
    },
  }
}
</script>
