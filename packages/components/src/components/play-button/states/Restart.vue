<template>
  <span class="restart-inner" aria-hidden="true">
    <icon type="restart" :color="color" :size="size" />
    <slot />
  </span>
</template>

<script>
import Icon from 'components/icons'
import { color } from 'defaults'

export default {
  components: {
    Icon
  },
  props: {
    color: {
      type: String,
      default: color
    },
    size: {
      type: Number,
      default: 25
    }
  }
}
</script>

<style lang="scss" scoped>
.restart-inner {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
