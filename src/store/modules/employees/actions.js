import { http } from "../../../helpers/axios";

export const loadEmployees = async ({ commit }) => {
  const { data } = await http.get("/api/employees");
  if (!data) {
    commit("SET_EMPLOYEES", []);
    return;
  }

  const employees = [];
  for (let id of Object.keys(data)) {
    employees.push({
      id,
      ...data[id],
    });
  }

  commit("SET_EMPLOYEES", employees);
};

export const createEmployee = async ({ commit }, employee) => {
  // const { name, last_name, email, birthday } = employee;

  const { data } = await http.post("/api/employees", employee);

  commit("ADD_EMPLOYEE", data);

  return data;
};

export const updateEmployee = async ({ commit }, employee) => {
  const { data } = await http.put(`/api/employees/${employee.id}`, employee);
  console.log(data);
  commit("UPDATE_EMPLOYEE", data);
};

export const deleteEmployee = async ({ commit }, id) => {
  const { data } = await http.delete(`/api/employees/${id}`);
  console.log(data);
  commit("DELETE_EMPLOYEE", id);
  return data;
};
