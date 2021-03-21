import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        counter: 0
    },
    mutations: {
        increase(state) {
            state.counter++;
        },
        decrease(state) {
            state.counter--;
        }
    },
    actions: {

    },
    getters: {},
    modules: {

    }

})