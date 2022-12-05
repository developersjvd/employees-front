<template>
  <div class="employee-list-container ">
    <div class="mt-2">
      <input
        type="text"
        class="form-control shadow"
        placeholder="Buscar empleado"
        v-model="term"
      />
    </div>
    <div class="mt-3 d-flex flex-column">
      <button
        class="btn btn-primary"
        @click="$router.push({ name: 'employee', params: { id: 'new' } })"
      >
        Nuevo empleado
      </button>
    </div>

    <div class="card shadow mt-3">
      <div class="card-header">
        <h2 class="fs-4">Lista de empleados</h2>
      </div>
      <div class="table-responsive">
        <table class="table align-items-center table-hover">
          <thead class="thead-light">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Cumpleaños</th>
              <th scope="col">Dirección</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <Employee v-for="employee in employeesByTerm" :key="employee.id" :employee="employee" />
        </table>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Spinner from '@/components/Spinner.vue';
import Employee from './Employee.vue';
export default {
  components: {
    Spinner,
    Employee,
  },
  computed: {
    ...mapGetters('employees', ['getEmployeesByTerm']),
    employeesByTerm() {
      return this.getEmployeesByTerm(this.term)
    }
  },
  data() {
    return {
      term: "",
    };
  },
};
</script>

