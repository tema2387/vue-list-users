<template>
    <div
      class="popup"
    >
      <div
        v-click-outside="closePopupUserAdd"
        class="popup__content"
      >
        <div
          class="popup__close"
          @click="togglePopupUserAdd"
        >
          <Close />
        </div>
        <slot />
      </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
// Icons
import Close from '@/components/svg/Close.vue'

export default {
  name: 'Popup',
  components: {
    Close
  },
  methods: {
    ...mapMutations('popups', ['togglePopupUserAdd', 'closePopupUserAdd'])
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: var(--black-opacity);
  display: flex;
  justify-content: center;
  align-items: center;

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    padding: 5px;
    color: var(--white);
    background-color: var(--black-opacity);
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    padding: 20px;
    position: relative;
    background-color: var(--white);
    border-radius: 10px;
    max-width: 500px;
    width: 100%;
    margin: 0 20px;
  }
}
</style>
