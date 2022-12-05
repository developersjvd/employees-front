import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "EmployeeLayout" */ "../views/employees/EmployeeLayout.vue"
      ),
    children: [
      // {
      //   path: '/',
      //   name: "employee",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "NoEmployee" */ "../views/employees/EmployeeList.vue"
      //     ),
      // },
      {
        path: "",
        name: "no-employee",
        component: () =>
          import(
            /* webpackChunkName: "NoEmployee" */ "../views/employees/NoEmployee.vue"
          ),
      },
      {
        path: "editar/:id",
        name: "employee",
        component: () =>
          import(
            /* webpackChunkName: "EmployeeForm" */ "../views/employees/EmployeeForm.vue"
          ),
        props: (route) => ({ id: route.params.id }),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
