<template>
  <div id="app">
    <div class="container">
      <nav style="text-align: center" class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="nav-item">
          <a class="nav-link" href="#">Estudiantes</a>
        </span>
        |
        <span class="nav-item">
          <a class="nav-link" href="#">Cursos</a>
        </span>
      </nav>
      <mi-tabla-estudiantes>Datos de estudiantes</mi-tabla-estudiantes>
        <mi-tabla-cursos>Datos de cursos</mi-tabla-cursos>
    </div>
  </div>
</template>

<script>
import miTablaEstudiantes from "@/components/MiTablaEstudiantes.vue";
import miTablaCursos from "@/components/MiTablaCursos.vue";
export default {
  name: "App",
  components: {
    miTablaEstudiantes,
    miTablaCursos,
  }
};
</script>

<style></style>
