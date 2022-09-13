<template>
  <article class="message is-dark">
    <div class="message-header">
      <p>Mes dernières experiences professionnelle</p>
    </div>
    <div class="message-body is-flex">

      <p class="subtitle">
      <div class="content-texte box">
        <img
            class="imgskill"
            src="../../assets/img/Various/CRC.png"
            alt="Image"
            height="128"
            width="128"
        />
        <strong>CR-Consulting Conseil</strong><br/>
        <p><u><strong>2019 - 2021</strong></u></p>

        Résponsable du centre de formation :
        <div class="list">
          <ul>
            <li>
              1.Etablir un programme de formation complet afin d'assurer une formation qualitative en 11 semaines.
            </li>
            <li>
              2.Dispenser des sessions de formation en présentiel ou en
              distanciel.
            </li>
            <li>
              3.Gérer les plannings de formations pour les collaborateurs interne et externe à la société à n+1.
            </li>
          </ul>
        </div>
      </div>
      </p>

      <div class="content-texte box">
        <img
            class="imgskill"
            src="../../assets/img/Various/crd.png"
            alt="Image"
            height="128"
            width="128"
        />
        <strong>CR-Digital</strong><br/>
        <u><strong>2019 - 2019</strong></u><br>
        Responsable des achats et revente de pièces
        détachées :
        <div class="list">
          <ul>
            <li>
              1.Chargé d'achats et reventes de pièces détachées pour produits
              Tech.
            </li>
            <li>
              2.Négociations avec les fournisseurs historiques et recherche de
              nouveaux fournisseurs.
            </li>
            <li>
              3.Préparation et expéditions de colis vers les différents points
              vente.
            </li>
          </ul>
        </div>
      </div>
      <div class="content-texte box">
        <img
            class="imgskill"
            src="../../assets/img/Various/cash.png"
            alt="Image"
            height="128"
            width="128"
        />
        <strong>Cash & Repair</strong><br/>
        <u><strong>2017 - 2019</strong></u><br>
        Technicien réparateur en produit High Tech :
        <div class="list">
          <ul>
            <li>
              1.Effectuer un diagnostic complet d'un appareil afin de chiffrer une possible réparation
            </li>
            <li>
              2.Conseiller les clients sur un potentiel achat, une réparation ou simplement une question concernant les
              nouvelles technologies.
            </li>
            <li>
              3.Gestion des planning de l'atelier, de la caisse et des commandes de pièces détachées.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "about-me",
};
</script>

<style scoped>


.message-header {
  display: flex !important;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
}

.message-body {
  display: flex !important;
  flex-direction: column;
}

.imgskill {
  border-radius: 5%;
  float: left;
  margin-left: 3rem;
  margin-right: 10rem;
}

.content-texte {
  text-align-last: start;
}

.list {
  display: flex;
}
</style>
