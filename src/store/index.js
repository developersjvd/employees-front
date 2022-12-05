import Vue from 'vue'
import Vuex from "vuex";
import employees from './modules/employees/index'
import skills from './modules/skills/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        employees,
        skills
    }
})

export default store