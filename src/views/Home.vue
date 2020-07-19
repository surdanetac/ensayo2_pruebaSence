<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TablaIndicadores />
  </div>
</template>

<script>
// @ is an alias to /src
import TablaIndicadores from "@/components/TablaIndicadores.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    TablaIndicadores
  },
  data() {
    return {};
  },
  mounted() {
    let indicadores = "";
    axios
      .get("https://mindicador.cl/api")
      .then(response => {
        indicadores = [
          { indicador: response.data.uf },
          { indicador: response.data.utm },
          { indicador: response.data.dolar },
          { indicador: response.data.euro },
          { indicador: response.data.libra_cobre },
          { indicador: response.data.bitcoin }
        ];
        this.$store.dispatch("setfecha", response.data.fecha);
        // console.log(response.data);
        console.log(indicadores);
      })
      .then(response => {
        this.$store.dispatch("setconsulta", indicadores);
      })
      .catch(err => {
        alert("No se recibio nada");
      });
  }
};
</script>
