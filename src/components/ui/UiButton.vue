<template>
  <button
    class="button"
    @click.stop="handleClick"
  >
    <div
      v-if="icon"
      class="button__icon"
    >
      <Plus />
    </div>
    <div class="button__text">
      {{ text }}
    </div>
  </button>
</template>

<script>
// Icons
import Plus from '@/components/svg/Plus.vue'

export default {
  name: 'UiButton',
  components: {
    Plus
  },
  props: {
    icon: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 18px 8px;
  background-color: var(--purple);
  color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--purple-opacity);
  }
}
</style>
