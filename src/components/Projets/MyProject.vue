<template>
  <div class="message-header">
    <p>Mes projets : En cours ou terminé</p>
  </div>
  <br><br>
  <div class="project">
  <div class="card container mt-3">
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
    <div class="card container mt-3">
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
  <br><br>
    <div class="card container mt-3">
    <header class="card-header">
      <p class="card-header-title">
        PortFolio Jordan Azran </p>
    </header>
    <div class="card-content">
      <p class="image is-128x128">
        <img src="../../assets/img/Various/wip.png">
      </p>
      <div class="content">
        Je vous partage également le code de mon portefolio.<br>
        Créer en VueJs avec un backOffice en NodeJs.<br>
        Il est en constant évolution, n'hésitez pas à le consulter de temps en temps pour voir les améliorations.
        <br>
      </div>
    </div>
    <footer class="card-footer">
      <a href="https://github.com/Speedou94/PortFolio_Jordan_AZRAN" class="card-footer-item">Repository GitHub</a>
    </footer>
  </div>
    <div class="card container mt-3">
      <header class="card-header">
        <p class="card-header-title">
          ENI-Sortie </p>
      </header>
      <div class="card-content">
        <p class="image is-128x128">
          <img src="../../assets/img/Various/logoenisortir.png">
        </p>
        <div class="content">
          Je vous partage également le code de mon portefolio.<br>
          Créer en VueJs avec un backOffice en NodeJs.<br>
          Il est en constant évolution, n'hésitez pas à le consulter de temps en temps pour voir les améliorations.
          <br>
        </div>
      </div>
      <footer class="card-footer">
        <a href="https://github.com/Speedou94/PortFolio_Jordan_AZRAN" class="card-footer-item">Repository GitHub</a>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.project{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;}

.image {
  height: 128px;
  width: 128px;
  display: inline-flex;
}

.card {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 30rem;
  align-items: stretch;
  justify-content: space-around;
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