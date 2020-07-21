<template>
  <div>
    <div class="formIndicadores">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <!-- <th scope="col">#</th> -->
            <th scope="col">Indicador</th>
            <th scope="col">Valor $ en CLP</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in arrayApiHome" :key="index">
            <!-- <th scope="row">{{ index +1}}</th> -->
            <th>{{ item.indicador.nombre }}</th>
            <th>{{ item.indicador.valor }}</th>
            <!-- <th>{{ fechaState }}</th> -->
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <span class="demo-input-label">Ultima actualización</span>
      <span class="demo-input-label">{{ fechaState}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TablaIndicadores",
  computed: {
    ...mapState(["arrayApiHome", "fechaState"])
  }
  // cambioValor(x) {}
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

.formIndicadores {
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
.demo-input-label {
  padding: 5px;
}
</style>
