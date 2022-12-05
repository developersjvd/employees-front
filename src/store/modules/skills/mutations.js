export const SET_SKILLS = (state, skills) => {
    state.skills = skills
    state.isLoading = false
}

export const UPDATE_SKILL = (state, skill) => {
    const id = state.skills.map(e => e.id).indexOf(skill.id)
    state.skills[id] = skill
}

export const ADD_SKILL = (state, skill) => {
    state.skills = [skill, ...state.skills]
}

export const DELETE_SKILL = (state, id) => {
    state.skills = state.skills.filter(emp => emp.id !== id)
}