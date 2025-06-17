import Vue from 'vue'
import Vuex from 'vuex'
// Stores
import popups from '@/store/popups'
import dataUsers from '@/store/dataUsers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    popups,
    dataUsers
  }
})
