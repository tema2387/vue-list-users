export default {
  namespaced: true,
  state: {
    users: JSON.parse(localStorage.getItem('users')) || [],
    sortType: {
      field: 'id',
      direction: 'increase'
    }
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user)
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    setSortType(state, { field, direction }) {
      state.sortType = { field, direction }
    }
  },
  getters: {
    getUsers: state => state.users,
    getUserById: state => id => state.users.find(user => user.id === id),
    getSortedUsers: state => {
      const { field, direction } = state.sortType
      const users = [...state.users]
      return users.sort((a, b) => {
        if (field === 'name') {
          return direction === 'increase'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        } else {
          return direction === 'increase'
            ? a.id - b.id
            : b.id - a.id
        }
      })
    }
  }
}
