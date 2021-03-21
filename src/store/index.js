import {
    createStore
} from 'vuex';
import axios from "axios";


export default createStore({
    state: {
        counter: 0,
        colorCode: "red"
    },
    mutations: {
        increase(state, randomData) {
            state.counter += randomData;
        },
        decrease(state, randomData) {
            state.counter -= randomData;
        },
        // new value didapat dari computed yang parameternya newValue
        setNewCode(state, newValue) {
            state.colorCode = newValue
        }

    },
    // actions digunakan untuk memanggil api dari backend dan menggunakan methods dari mutations

    actions: {
        increase({
            commit
        }) {
            axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(
                response => {
                    commit("increase", response.data)
                }
            )
        },
        decrease({
            commit
        }) {
            axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(
                response => {
                    commit("decrease", response.data)
                }
            )
        },
        // mengunakan actions untuk mengubah setNewCode
        setNewCode({
            commit
        }, newValue) {
            commit("setNewCode", newValue)

        }

    },
    getters: {
        counterSquare(state) {
            return state.counter * state.counter
        }
    },
    modules: {

    }

})