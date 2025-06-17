<template>
  <div class="user-list">
    <div class="user-list__actions">
      <UiButton
        @click="togglePopupUserAdd"
        :icon="true"
        text="Добавить пользователя"
        class="user-list__button"
      />
    </div>
    <div class="user-list__header">
      <div class="user-list__header-item user-list__header-item--clickable" @click="clickSortUsersById">
        #
        <Arrow
          class="user-list__header-item-icon"
          :class="[sortTypeById === 'decrease' ? 'user-list__header-item--rotate' : '']"
        />
      </div>
      <div class="user-list__header-item user-list__header-item--clickable" @click="clickSortUsersByName">
        Имя
        <Arrow
          class="user-list__header-item-icon"
          :class="[sortTypeByName === 'decrease' ? 'user-list__header-item--rotate' : '']"
        />
      </div>
      <div class="user-list__header-item">
        Телефон
      </div>
      <div class="user-list__header-item">
        Начальник
      </div>
    </div>
    <div class="user-list__content">
      <UserItem
        v-for="user in users"
        :key="user.id"
        :user="user"
        :border="user.id !== users[users.length - 1].id"
      />
      <div
        v-if="users.length === 0"
        class="user-list__empty"
      >
        Пользователи не найдены
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import UserItem from '@/components/blocks/UserItem'
// Icons
import Arrow from '@/components/svg/Arrow'

export default {
  name: 'UserList',
  components: {
    UserItem,
    Arrow
  },
  data() {
    return {
      sortTypeByName: 'increase',
      sortTypeById: 'increase'
    }
  },
  computed: {
    ...mapGetters('dataUsers', ['getSortedUsers']),
    users() {
      return this.getSortedUsers
    }
  },
  methods: {
    ...mapMutations('popups', ['togglePopupUserAdd']),
    ...mapMutations('dataUsers', ['setSortType']),
    clickSortUsersByName() {
      this.sortTypeByName = this.sortTypeByName === 'increase' ? 'decrease' : 'increase'
      this.setSortType({ field: 'name', direction: this.sortTypeByName })
    },
    clickSortUsersById() {
      this.sortTypeById = this.sortTypeById === 'increase' ? 'decrease' : 'increase'
      this.setSortType({ field: 'id', direction: this.sortTypeById })
    }
  }
}
</script>

<style lang="scss" scoped>
.user-list {
  max-width: 1000px;
  max-height: 500px;
  width: 100%;
  background-color: var(--white);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 0 20px;
  box-shadow: var(--shadow-md);

  &__actions {
    padding: 20px;
  }

  &__button {
    max-width: max-content;
  }

  &__header {
    display: flex;
    align-items: center;
    padding: 16px 20px;
    background-color: var(--table-bg);
    gap: 20px;
    min-width: 800px;

    &-item {
      width: 200px;
      display: flex;
      align-items: center;
      border-right: 1px solid var(--black-opacity);

      &-icon {
        transition: transform 0.3s ease-in-out;
      }

      &:last-child {
        border-right: none;
      }

      &--clickable {
        cursor: pointer;
      }

      &--rotate {
        transform: rotate(180deg);
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow-y: auto;
    min-width: 800px;
  }

  &__empty {
    text-align: center;
    color: var(--secondary-text);
  }
}
</style>
