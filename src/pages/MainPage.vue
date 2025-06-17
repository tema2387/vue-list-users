<template>
  <DefaultLayout>
    <div class="main-page">
      <UserList />
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import UserList from '@/components/blocks/UserList.vue'

export default {
  name: 'MainPage',
  components: {
    DefaultLayout,
    UserList
  }
}
</script>

<style lang="scss" scoped>
.main-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
