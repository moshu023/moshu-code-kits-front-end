import { createStore } from 'vuex'

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
    }
})

export default store