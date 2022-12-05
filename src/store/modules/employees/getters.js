export const getEmployeesByTerm =
  (state) =>
  (term = "") => {
    if (term.length === 0) return state.employees;

    return state.employees.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(term.toLowerCase()) ||
        employee.last_name.toLowerCase().includes(term.toLowerCase()) ||
        employee.email.toLowerCase().includes(term.toLowerCase()) ||
        employee.address.street.toLowerCase().includes(term.toLowerCase()) ||
        employee.birthday.includes(term)
      );
    });
  };

export const getEmployeeById =
  (state) =>
  (id = "") => {
    const employee = state.employee.find((emp) => emp.id === id);

    if (!employee) return;
    return { ...employee };
  };

export const getSteps = () => [
  {
    id: 1,
    step: "Información del usuario",
  },
  {
    id: 2,
    step: "Dirección",
  },
  {
    id: 3,
    step: "Habilidades",
  },
];
