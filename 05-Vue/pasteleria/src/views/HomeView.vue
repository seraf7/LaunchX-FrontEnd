<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Bievenido a Your Vue.js App" />

    <h2>
      ¡¡Bienvenido!! <br />
      Dale un vistazo a la astrologia pastelera
    </h2>

    <sabores-cliente />

    <formulario-cliente />
    <info-pasteleria />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import InfoPasteleria from "../components/InfoPasteleria.vue";
import FormularioCliente from "../components/FormularioCliente.vue";
import SaboresCliente from "../components/SaboresCliente.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    InfoPasteleria,
    FormularioCliente,
    SaboresCliente,
  },
};
</script>

    HeaderCliente