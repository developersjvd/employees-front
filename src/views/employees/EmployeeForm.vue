<template>
  <div class="card shadow p-3">
    <h2 class="text-primary fs-3 text-center mb-2">Formulario</h2>

    <form-wizard
      backButtonText="Volver"
      color="#712CF9F2"
      finishButtonText="Terminar"
      nextButtonText="Continuar"
      stepSize="xs"
      title=""
      subtitle=""
    >
      <tab-content
        title="Datos del empleado"
        :selected="true"
        :before-change="onSubmitEmployee"
      >
        <div class="container">
          <h2 class="text-primary fs-3 text-center mb-2">Datos del empleado</h2>
          <div class="form-floating mb-3">
            <input
              v-model="formData.name"
              type="text"
              class="form-control"
              id="name"
              placeholder="Nombre"
            />
            <label for="name">Nombre</label>
          </div>

          <div class="form-floating mb-3">
            <input
              v-model="formData.last_name"
              type="text"
              class="form-control"
              id="last_name"
              placeholder="Nombre"
            />
            <label for="last_name">Apellido</label>
          </div>

          <div class="form-floating mb-3">
            <input
              v-model="formData.email"
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
            <label for="email">Correo</label>
          </div>

          <div class="form-floating mb-3">
            <input
              v-model="formData.birthday"
              type="date"
              class="form-control"
              id="birthday"
              placeholder="Cumpleaños"
            />
            <label for="birthday">Cumpleaños</label>
          </div>
        </div>
      </tab-content>
      <tab-content title="Dirección">
        <EmployeeAddressForm :formData="formData" />
      </tab-content>
      <tab-content title="Habilidades">
        <EmployeeSkillForm />
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import ValidationHelper from "vue-form-wizard";
import EmployeeDataForm from "./steps/EmployeeDataForm.vue";
import EmployeeAddressForm from "./steps/EmployeeAddressForm.vue";
import EmployeeSkillForm from "./steps/EmployeeSkillForm.vue";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import { required, email } from "vuelidate/lib/validators";
import { mapActions } from 'vuex';
export default {
  components: {
    EmployeeDataForm,
    EmployeeAddressForm,
    EmployeeSkillForm,
    FormWizard,
    TabContent,
  },
  mixins: [ValidationHelper],
  data() {
    return {
      formData: {
        name: "",
        last_name: "",
        email: "null",
        birthday: "null",
        street: "null",
        num_int: "null",
        num_ext: "null",
        suburb: "null",
        state: "null",
        city: "null",
      },
      validationRules: [
        {
          name: { required },
          last_name: { required },
          email: { required, email },
          birthday: { required, email },
        },
      ],
    };
  },
  methods: {
    ...mapActions('employees', 'createEmployee'),
    async onSubmitEmployee(){
      await this.createEmployee(this.formData)
    },
  },
  mounted() {},
};
</script>

<style scoped>
.form-floating label {
  color: #4e4e4ed6;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border: 2px solid #8a5ce5f2;
  outline: 0;
  box-shadow: none;
}
</style>
