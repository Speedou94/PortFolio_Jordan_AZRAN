<template>
  <title>A propos</title>
  <nav>
    <nav-bar />
  </nav>
  <div class="accueil">
    <h1 class="title mt-6 has-font-ubuntu">Jordan AZRAN</h1>
    <h2 class="subtitle">Developpeur Web & Web Mobile</h2>
  </div>
  <article class="message is-dark">
    <div class="message-header">
      <p>Qui je suis ?</p>
    </div>
    <div class="message-body">
      <p class="subtitle">
        <strong>Bienvenue sur mon portefolio.</strong><br /><br />
        Je me présente, Jordan, 31 ans, papa de 3 enfants.
        <br /><br />
        Passionné par la mécanique et l'informatique, j'en ai fais mes metiers
        pendant ces 15 dernières années.
        <br />
        D'abord mécanicien auto / moto, je me suis ensuite converti dans le
        monde du high tech et tout ce qui touches les nouvelles technologies
        grace à un emploi dans une société de réparation de produit High Tech
        (Smartphones, tablettes, ordinateurs, consoles de jeux vidéo etc
        etc).<br />
        <br />
        Etant assez curieux de nature, je n'ai aucune gène à passer des heures
        sur internet pour apprendre d'avantages de choses.<br />
        J'ai donc voulu m'essayer au developpement web et après plusieurs
        recherches, j'ai eu l'opportunité d'intégré une formation à l'
        <a
          href="https://www.eni-ecole.fr/formations/developpement/bac2-developpeur-web-et-web-mobile/"
          target="_blank"
          >ENI</a
        >.<br />
        <br />
        J'y apprend énormement de choses et ma curiosité est mise à mal avec
        toutes les recherches necessaire pour mon apprentissage.<br />
        J'ai pu me créer de solides bases entre autre en HTML/CSS, Java,
        JavaScript, PHP... et découvrir les bases de données avec Oracle
        Database, SQL Server ou encore MySQL.
        <br />
        <br />
        Bases qui resteront à renforcer en situation réelle grace à un stage que
        j'effectuerai du
        <strong>17 octobre 2022 au 9 décembre 2022.</strong> <br />
        <br />
        Il vous est possible de consulter<strong
          ><a class="navbar-item" href="https://github.com/Speedou94"
            >mes projets</a
          ></strong
        >
        (personnel ou dans le cadre de ma formation) sur ce site. <br /><br />
        Si mon profil vous plait, que vous souhaitez que l'ont se rencontre et
        que l'on échange sur un projet que vous avez en tête ou tout simplement
        pour prendre un café, je serai ravi de vous répondre.
      </p>
    </div>
  </article>
  <footer>
    <footer-page />
  </footer>
</template>

<script>
export default {
  name: "about-me",
};
</script>

<style scoped>
.accueil {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.message-header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
