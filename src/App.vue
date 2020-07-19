<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="light" variant="dark">
        <b-navbar-brand href="#">Mindicador</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'Home' }">Indicadores Diarios</b-nav-item>
            <b-nav-item :to="{ name: 'Buscador' }">Buscador</b-nav-item>
            <b-nav-item :to="{ name: 'Historial' }">Historial</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
