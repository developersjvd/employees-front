export const SET_EMPLOYEES = (state, employees) => {
    state.employees = employees
    state.isLoading = false
}

export const UPDATE_EMPLOYEE = (state, employee) => {
    const id = state.employees.map(e => e.id).indexOf(employee.id)
    state.employees[id] = employee
}

export const ADD_EMPLOYEE = (state, employee) => {
    state.employees = [employee, ...state.employees]
}

export const DELETE_EMPLOYEE = (state, id) => {
    state.employees = state.employees.filter(emp => emp.id !== id)
}