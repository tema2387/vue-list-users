<template>
  <div
    class="user-item"
    :class="[border ? 'user-item--border' : '']"
  >
    <div class="user-item__item user-item__item--purple">
      <div class="user-item__item-text">
        #{{ user.id }}
      </div>
    </div>
    <div class="user-item__item">
      <div class="user-item__item-text">
        {{ user.name }}
      </div>
    </div>
    <div class="user-item__item">
      <div class="user-item__item-text">
        {{ user.phone }}
      </div>
    </div>
    <div class="user-item__item user-item__item--purple">
      <div class="user-item__item-text">
        {{ getBoss ? `#${getBoss.id} ${getBoss.name}` : 'Не назначен' }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      required: true
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters('dataUsers', ['getUserById']),
    getBoss() {
      return this.user.boss ? this.getUserById(this.user.boss) : null
    }
  }
}
</script>

<style lang="scss" scoped>
.user-item {
    display: flex;
    align-items: center;
    padding: 20px 0;
    gap: 20px;

    &--border {
      border-bottom: 1px solid var(--secondary-text);
    }

    &__item {
      width: 200px;

      &-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }

      &--purple {
        color: var(--purple);
      }
    }
  }
</style>
