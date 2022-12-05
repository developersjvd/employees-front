<template>
  <div
    v-if="isLoading"
    class="container d-flex justify-content-center align-items-center p-5"
    style="height: 100vh"
  >
    <Spinner />
  </div>
  <div v-else class="container-fluid p-4">
    <div class="d-flex gap-3 flex-column flex-md-row">
      <div class="col-12 col-md-7 order-2 order-md-1">
        <employee-list />
      </div>
      <div class="col-12 col-md-5 order-1 order-md-2">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import EmployeeList from "./EmployeeList.vue";
import Spinner from "@/components/Spinner.vue";
export default {
  components: {
    EmployeeList,
    Spinner,
  },
  methods: {
    ...mapActions("employees", ["loadEmployees"]),
  },
  computed: {
    ...mapState("employees", ["isLoading"]),
  },
  created() {
    this.loadEmployees();
  },
};
</script>

<style></style>
