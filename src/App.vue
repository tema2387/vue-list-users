<template>
  <div id="app">
    <RouterView />
    <Transition name="opacity">
      <PopupUserAdd v-if="popupUserAddOpen" />
    </Transition>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import { mapState } from 'vuex'
// Popups
import PopupUserAdd from '@/components/popup/user-add'

export default {
  name: 'App',
  components: {
    RouterView,
    PopupUserAdd
  },
  computed: {
    ...mapState('popups', ['popupUserAddOpen'])
  }
}
</script>
