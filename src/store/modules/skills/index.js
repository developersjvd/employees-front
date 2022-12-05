import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'

const skillModule = {
    namespaced: true,
    state,
    actions,
    mutations
}

export default skillModule