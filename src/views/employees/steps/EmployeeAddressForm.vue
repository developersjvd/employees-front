<template>
  <div class="container">
    <form>
      <h2 class="text-primary fs-3 text-center mb-2">Dirección del empleado</h2>
      <div class="form-floating mb-3">
        <input
          v-model="formData.street"
          type="text"
          class="form-control"
          id="street"
          placeholder="Nombre"
        />
        <label for="street">Calle</label>
      </div>
      <div class="d-block d-md-flex gap-2">
        <div class="form-floating mb-3">
          <input
            v-model="formData.num_int"
            type="text"
            class="form-control"
            id="num_int"
            placeholder="Num. Int"
          />
          <label for="num_int">Num. Int</label>
        </div>
        <div class="form-floating mb-3">
          <input
            v-model="formData.num_ext"
            type="text"
            class="form-control"
            id="num_ext"
            placeholder="Num. Ext."
          />
          <label for="num_ext">Num. Ext.</label>
        </div>
      </div>
      <div class="form-floating mb-3">
        <input
          v-model="formData.suburb"
          type="text"
          class="form-control"
          id="suburb"
          placeholder="Colonia"
        />
        <label for="suburb">Colonia</label>
      </div>
      <div class="form-floating mb-3">
        <input
          v-model="formData.state"
          type="text"
          class="form-control"
          id="state"
          placeholder="Estado"
        />
        <label for="state">Estado</label>
      </div>
      <div class="form-floating mb-3">
        <input
          v-model="formData.city"
          type="text"
          class="form-control"
          id="city"
          placeholder="Ciudad"
        />
        <label for="city">Ciudad</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['formData']
};
</script>
