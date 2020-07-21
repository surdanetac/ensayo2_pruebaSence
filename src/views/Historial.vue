<template>
  <div class="historial">
    <h1>Historial de Busquedas</h1>
    <div class="historial_table">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Indicador</th>
            <th scope="col">Valor $ en CLP</th>
            <th scope="col">Fecha de Cotización</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in indicadoresHistorialState" :key="index">
            <th>{{ item.moneda }}</th>
            <th>{{ item.valor }}</th>
            <th>{{ item.fecha }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["indicadoresHistorialState"])
  },
  methods: {}
};
</script>

<style  scoped>
.historial_table {
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px;
  width: 90%;
  border: solid 2px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
