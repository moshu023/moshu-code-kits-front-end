import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import routerModule from "./routerStore/index.js";
const store = createStore({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters: {

    },
    modules:{
        router:routerModule,
    },
    plugins: [createPersistedState()],
})

export default store