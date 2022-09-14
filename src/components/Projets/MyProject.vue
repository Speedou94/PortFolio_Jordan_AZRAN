<template>
  <div class="message-header">
    <p>Mes projets : En cours ou terminé</p>
  </div>
  <br><br>
  <div class="card container">
    <header class="card-header">
      <p class="card-header-title">
        ENI-Enchères
      </p>
    </header>
    <div class="card-content">
      <p class="image is-128x128">
        <img src="../../assets/img/Various/eniE.png">
      </p>
      <div class="content">
        Projet de groupe sur une webapp d'encheres ,<br> faite en J2E et TomCat.<br> Travail par groupe de 3 personnes.
        <br>
      </div>
    </div>
    <footer class="card-footer">
      <a href="https://github.com/Speedou94/ENI-ENCHERE" class="card-footer-item">Repository GitHub</a>
    </footer>
  </div>
  <br><br>
  <div class="card container">
    <header class="card-header">
      <p class="card-header-title">
        LCDE Photo </p>
    </header>
    <div class="card-content">
      <p class="image is-128x128">
        <img src="../../assets/img/Various/wip.png">
      </p>
      <div class="content">
        Projet de Book photo en VueJS.<br>
        Galeries photo,<br>
        page d'informations avec formulaire.<br>
      </div>
    </div>
    <footer class="card-footer">
      <a href="https://github.com/Speedou94/LCDEPhotoVueJS" class="card-footer-item">Repository GitHub</a>
    </footer>
  </div>

</template>

<style lang="scss" scoped>
.image {
  height: 128px;
  width: 128px;
  display: inline-flex;
}

.card {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: center;
}

.card-header-title {
  background-color: darkgoldenrod;
}

.message-header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

</style>

<script>

</script>