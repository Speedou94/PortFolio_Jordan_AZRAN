<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
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
        <router-link to="/aboutme" class="navbar-item">Accueil</router-link>

        <router-link to="/cv" class="navbar-item">Mon CV</router-link>
        <router-link to="/projets" class="navbar-item"
          >Mes Projets
        </router-link>
        <a class="navbar-item" href="https://github.com/Speedou94">
          Mon GitHub</a
        >
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/contact" class="button is-primary"
            >Me contacter
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar{
  background: none;
  color: white;
}
</style>
