import syncRoutes from '@/router/syncRoutes'
import router from '@/router/index'
const route = {
  state: {
    syncRoutes: syncRoutes,
    currentModule: ''
  },
  mutations: {
    UPDATE_MODULE (state, module) {
      state.currentModule = module
    }
  },
  actions: {
    updateRoute ({ commit, state }) {
      for (const x in state.syncRoutes) {
        if (state.currentModule === '') {
          commit('UPDATE_MODULE', x)
        }
        router.addRoutes(state.syncRoutes[x].routes)
      }
      return Promise.resolve()
    }
  },
  getters: {
    syncRoutes: state => state.syncRoutes,
    currentModule: state => state.currentModule
  }
}
export default route
