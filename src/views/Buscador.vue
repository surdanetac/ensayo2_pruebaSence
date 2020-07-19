<template>
  <div class="buscador">
    <h1>Busca tu indicador por fecha</h1>
    <input type="date" placeholder="dd-mm-yyyy" v-model="fecha" />
    <button class="btn btn-primary m-2" @click="buscar">Buscar</button>
    <div>
      <label>Fecha Cotizacion</label>
      <div>{{fecha}}</div>
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Indicador</th>
          <th scope="col">Valor $ en CLP</th>
        </tr>
      </thead>
      <tbody>
        <!-- <th>{{ fecha }}</th> -->
        <tr v-for="(item, index) in indicadoresDiaState" :key="index">
          <!-- <th scope="row">{{ index +1}}</th> -->
          <th>{{ item.moneda }}</th>
          <th>{{ item.valor }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      indicadores: ["uf", "utm", "dolar", "euro", "libra_cobre", "bitcoin"],
      fecha: "15-07-2020"
    };
  },
  computed: {
    ...mapState(["indicadoresDiaState"])
  },
  methods: {
    buscar() {
      let indicadoresDia = [];
      this.indicadores.forEach(element => {
        axios
          .get(`https://mindicador.cl/api/${element}/${this.fecha}`)
          .then(response => {
            indicadoresDia.push({
              moneda: response.data.nombre,
              valor: response.data.serie[0].valor
            });
            console.log(response.data);
          })
          .catch(err => {
            console.log("no se recibio nada");
          });
      });
      this.$store.dispatch("setConsultaDia", indicadoresDia);
    }
  }
};
</script>
<style scoped>
.buscador {
  margin-top: 2%;
}
</style>
