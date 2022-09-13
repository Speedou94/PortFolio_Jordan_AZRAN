<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item"> Accueil </router-link>
        <router-link to="/aboutme" class="navbar-item"
          >A propos de moi
        </router-link>
        <router-link to="/cv" class="navbar-item">Mon CV</router-link>
        <router-link to="/projets" class="navbar-item">Mes Projets</router-link>
        <a class="navbar-item" href="https://github.com/Speedou94"
          >Mon GitHub</a
        >
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/contact" class="button is-warning"
            >Me contacter
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.navbar-menu {
  background-color: darkgoldenrod;
}

.navbar-item {
  background-color: darkgoldenrod;
}

.navbar a.navbar-item {
  color: white;
  background-color: darkgoldenrod;
  font: bold;
}
</style>
