<template>
  <header>
    <img src="./assets/logo.png" width="250">
    <h1>Pastelería del zodiaco</h1>
  </header>

  <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@import './css/estilo.css';
</style>
