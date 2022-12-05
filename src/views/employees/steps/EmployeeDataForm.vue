<template>
  <div class="container">
    <form @submit="onSubmitEmployee">
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
    </form>
  </div>
</template>

<script>
export default {
  props: ['formData']
};
</script>

<style></style>
