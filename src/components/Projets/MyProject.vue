<template>
  <div class="message-header">
    <p>Mes projets : En cours ou terminé</p>
  </div>
  <section class="" id="projects">
    <div class="my-project">
      <div class="card is-flex-direction-column" v-for="projet in projets" :key="projet.id">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img :src="projet.src" alt="Placeholder image"/>
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ projet.name }}</p><br><br>
              <p class="subtitle is-6">{{ projet.typeDeProjet }}</p><br>
            </div>
          </div>

          <div class="content">
            {{ projet.techno }} <br/>
            {{ projet.sujet }}
          </div>
        </div>
        <footer class="card-footer">
          <a :href="projet.lienGit" target="_blank" class="card-footer-item"
          >Voir sur GitHub</a
          >

        </footer>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "MyProject",
  data() {
    return {
      projets: [
        {
          id: 0,
          name: "ENI-Enchères",
          typeDeProjet: "Projet de formation",
          gitHub: "https://github.com/Speedou94/ENI-ENCHERE",
          src: require("@/assets/img/Various/eniE.png"),
          techno: "JAVAEE 9, TomCat 9 et JSTL",
          sujet:
              "Projet de groupe dans le cadre de ma formation à l'ENI. Développer une WebApp. " +
              "Nous étions un groupe de 3 etudiants à travailler ensemble sur un site permettant de mettre en vente ses objets et d'en acheter.",
        },
        {
          id: 1,
          name: "LCDE Photographie",
          typeDeProjet: "Projet personnel",
          lienGit: "https://github.com/Speedou94/LCDEPhotoVueJS",
          src: require("@/assets/img/Various/wip.png"),
          techno: "VueJs + Bulma + NodeJs(express)",
          sujet:
              "Book photo servant à ma compagne afin de faire partager son travail de photographe",
        },
        {
          id: 2,
          name: "PorteFolio Jordan Azran",
          typeDeProjet: "Projet principal",
          lienGit: "https://github.com/Speedou94/PortFolio_Jordan_AZRAN",
          src: require("@/assets/img/Various/wip.png"),
          techno: "VueJs + Bulma + NodeJs(express)",
          sujet:
              "Portfolio, projet en parallel de ma formation à l'ENI et me permettant de partager mon travail en ligne.",
        },
        {
          id: 2,
          name: "ENI-Sortie",
          typeDeProjet: "Projet de formation",
          lienGit: "https://github.com/Speedou94/ENI-Sortie",
          src: require("@/assets/img/Various/logoenisortir.png"),
          techno: "Symfony + Bootstrap + JavaScript + EasyAdmin",
          sujet:
              "Projet de groupe dans le cadre de ma formation à l'ENI. Développer une WebApp. " +
              "Nous étions un groupe de 4 etudiants à travailler ensemble sur un site proposant diverses sorties entre étudiants.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.my-project {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.card {
  width: 350px;
  margin: 10px;
  background-color: white;
  border-radius: 3rem;
  text-align: center;
}

.title {
  text-align: left;
}
.content{
  text-align: center;
}


</style>