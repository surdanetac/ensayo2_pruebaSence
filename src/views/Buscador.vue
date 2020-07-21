<template>
  <div class="buscador">
    <h1>Busca tu indicador por fecha</h1>
    <span class="demo-input-label">Selecciona Indicador</span>
    <div class="input_selector">
      <el-select v-model="value" clearable placeholder="Select">
        <el-option
          v-for="item in indicadores"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="input_buscador">
      <el-input type="date" placeholder="dd-mm-yyyy" suffix-icon="el-icon-date" v-model="fecha"></el-input>
      <button class="btn btn-primary ml-1" @click="buscar">Buscar</button>
    </div>
    <div class="mostrarValor">
      <div class="mostrarFecha">
        <label>Fecha:</label>
        <div>{{fechaState}}</div>
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
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      fecha: "",
      indicadores: [
        { label: "Unidad de Fomento (UF)", value: "uf" },
        { label: "Unidad Tributaria Mensual", value: "utm" },
        { label: "Dolar", value: "dolar" },
        { label: "Euro", value: "euro" },
        { label: "libra", value: "libra_cobre" },
        { label: "Bitcoin", value: "bitcoin" }
      ],
      value: "",
      indicadoresHistorial: []
    };
  },
  computed: {
    ...mapState(["indicadoresDiaState", "fechaState"]),
    invertirFecha() {
      let dia = this.fecha.slice(8, 10);
      let mes = this.fecha.slice(5, 7);
      let year = this.fecha.slice(0, 4);
      return `${dia}-${mes}-${year}`;
    }
  },
  methods: {
    buscar() {
      let newFecha = this.invertirFecha;
      let indicadoresDia = [];
      axios
        .get(`https://mindicador.cl/api/${this.value}/${newFecha}`)
        .then(response => {
          indicadoresDia.push({
            moneda: response.data.nombre,
            valor: response.data.serie[0].valor
          });
          this.indicadoresHistorial.push({
            moneda: response.data.nombre,
            valor: response.data.serie[0].valor,
            fecha: response.data.serie[0].fecha
          });
          this.fecha = "";
          this.value = "";
          console.log(indicadoresDia);
          console.log(indicadoresHistorial);
        })
        .catch(err => {
          console.log("no se recibio nada");
        });
      this.$store.dispatch("setconsultadia", indicadoresDia);
      this.$store.dispatch("setfecha", newFecha);
      this.$store.dispatch("setindicadoreshistorial", indicadoresHistorial);
    }
  },
  mounted() {
    let newFecha = " - ";
    let indicadoresDia = [{ moneda: " - ", valor: " - " }];
    let indicadoresHistorial = "";
    this.$store.dispatch("setconsultadia", indicadoresDia);
    this.$store.dispatch("setfecha", newFecha);
    this.$store.dispatch("setindicadoreshistorial", indicadoresHistorial);
  }
};
</script>
<style scoped>
.buscador {
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input_buscador {
  width: 80%;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.mostrarValor {
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
.mostrarFecha {
  width: 80%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
}
</style>
