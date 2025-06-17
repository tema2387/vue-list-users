<template>
  <Popup>
    <div class="popup-user-add">
      <div class="popup-user-add__title">
        <h2>Добавление пользователя</h2>
      </div>
      <div class="popup-user-add__content">
        <UiInput
          id="name"
          label="Имя"
          placeholder="Введите имя"
          v-model="name"
          :error="errorName"
        />
        <UiInput
          id="phone"
          label="Телефон"
          format="phone"
          :error="errorPhone"
          placeholder="+7 (___) ___-__-__"
          v-model="phone"
        />
        <UiSelect
          id="boss"
          label="Начальник"
          placeholder="Выберите начальника"
          v-model="boss"
          :options="getUsers"
        />
      </div>
      <UiButton
        text="Сохранить"
        @click="addUserHandler"
      />
    </div>
  </Popup>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Popup from '@/components/popup'
import UiInput from '@/components/ui/UiInput'
import UiSelect from '@/components/ui/UiSelect'

export default {
  name: 'PopupUserAdd',
  components: {
    Popup,
    UiInput,
    UiSelect
  },
  data() {
    return {
      name: '',
      phone: '',
      boss: null,
      errorName: false,
      errorPhone: false
    }
  },
  computed: {
    ...mapGetters('dataUsers', ['getUsers'])
  },
  methods: {
    ...mapMutations('dataUsers', ['addUser']),
    ...mapMutations('popups', ['togglePopupUserAdd']),
    addUserHandler() {
      if (!this.validateFields()) {
        return
      }

      const newUser = {
        id: this.getUsers.length + 1,
        name: this.name,
        phone: this.phone,
        boss: this.boss
      }
      this.addUser(newUser)
      this.togglePopupUserAdd()
    },
    validateFields() {
      let result = true

      if (!/\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/.test(this.phone)) {
        this.errorPhone = true
        result = false
      }

      if (this.name === '') {
        this.errorName = true
        result = false
      }

      return result
    }
  },
  watch: {
    phone() {
      this.errorPhone = false
    },
    name() {
      this.errorName = false
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-user-add {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }

  &__title {
    margin-bottom: 20px;
  }
}
</style>
