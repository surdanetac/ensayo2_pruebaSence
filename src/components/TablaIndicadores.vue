<template>
  <div class="FormIndicadores">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Indicador</th>
          <th scope="col">Valor $ en CLP</th>
          <th scope="col">Fecha de Cotización</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in arrayApiHome" :key="index">
          <th scope="row">{{ index +1}}</th>
          <th>{{ item.indicador.nombre }}</th>
          <th>{{ item.indicador.valor }}</th>
          <th>{{ fecha }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TablaIndicadores",
  computed: {
    ...mapState(["arrayApiHome", "fecha"])
  },
  cambioValor(x) {
    return;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
