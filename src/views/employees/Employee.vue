<template>
  <tbody>
    <tr>
      <td class="p-3">{{ `${employee.name} ${employee.last_name}` }}</td>
      <td class="p-3">{{ employee.email }}</td>
      <td class="p-3">{{ employee.birthday }}</td>
      <td class="p-3">{{ shortAddressText }}</td>
      <td class="p-3">{{ employee.address?.city }}</td>
      <td class="p-3">
        <!-- Button trigger modal -->
        <button
          v-if="employee.skills.length > 0"
          type="button"
          class="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Habilidades
        </button>
        <span v-else>Sin habilidades</span>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Habilidades
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="container d-flex flex-col flex-md-row justify-content-between gap-2 flex-wrap">
                  <span
                  class="text-white p-2 rounded"
                  v-for="skill in employee?.skills"
                  :key="skill.id"
                  :style="{background: skill.color}"
                    >{{ skill.name }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td class="p-3 text-light">
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-sm btn-primary"
            @click="
              $router.push({ name: 'employee', params: { id: employee.id } })
            "
          >
            Editar
          </button>
          <button
            type="button"
            class="btn btn-sm btn-danger"
            @click="onDeleteEmployee"
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapActions } from "vuex";
import Swal from "sweetalert2";
export default {
  props: {
    employee: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("employees", ["deleteEmployee", "updateEmployee"]),
    async onDeleteEmployee() {
      const { isConfirmed } = await Swal.fire({
        title: "¿Deseas eliminar este registro?",
        text: "Una vez borrado, no se puede deshacer la acción.",
        showDenyButton: true,
        confirmButtonText: "Sí, estoy seguro",
      });

      if (isConfirmed) {
        new Swal({
          title: "Espere por favor",
          allowOutsideClick: false,
        });

        Swal.showLoading();
        await this.deleteEmployee(this.employee.id);
        this.$router.push({ name: "no-employee" });

        Swal.fire("Eliminado", "", "success");
      }
    },
  },
  computed: {
    getAddress() {
      return `${this.employee?.address?.suburb}, ${this.employee?.address?.street}, ${this.employee?.address?.state}`;
    },
    shortAddressText() {
      return this.getAddress.length > 35
        ? this.getAddress.substring(0, 35) + "..."
        : this.getAddress;
    },
  },
};
</script>

<style lang="scss" scoped>
button.btn {
  color: #fff;
  font-weight: 600;
}
</style>
