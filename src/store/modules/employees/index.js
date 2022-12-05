import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const employeeModule = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default employeeModule