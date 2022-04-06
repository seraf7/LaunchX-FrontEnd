<template>
  <form action="" method="">
    <!-- Sección de información del cliente -->
    <p>Compartenos tu información de contacto</p>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" /><br />

    <label for="telefono">Telefono</label>
    <input type="tel" id="telefono" /><br />

    <label for="email">Email</label>
    <input type="email" id="email" /><br />

    <label for="descripción">Descripción</label>
    <input type="text" id="descripcion" /><br />

    <input type="reset" value="Borrar" />
    <input type="submit" value="Ordenar" />
  </form>
</template>

<script>
export default {
  name: "FormularioCliente",
};
</script>