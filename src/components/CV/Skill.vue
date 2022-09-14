<template>
  <article class="message is-dark ">
    <div class="message-header">
      <p>Mes principales formations</p>
    </div>
    <div class="message-body is-flex container">

      <p class="subtitle">
      <div class="content-texte box">
        <img
            class="imgENI"
            src="../../assets/img/Various/eni.png"
            alt="Image"
            height="128"
            width="128"
        />
        <strong>2022 - 2023 : Titre niveau 5 RNCP31114</strong><br/>
      <br>Développeur Web et Mobile - ENI Ecole  - Nantes
      44000
      <p>Maintenir ou programmer une application informatique,<br>
        Tester une application.<br>
        Participer aux études fonctionnelles et techniques.<br>
        </p>
      </div>
      </p>

        <p class="subtitle">
        <div class="content-texte box">
          <img
              class="imgENI"
              src="../../assets/img/Various/crd.png"
              alt="Image"
              height="128"
              width="128"
          />
          <strong>2017 - 2018 : Formation Réparateur en produits High Tech</strong><br/>
          <br>CR-Consulting Conseil - La Roche Sur Yon 85000
          <p>Comprendre le fonctionnement d'un appareil éléctronique<br>
            Etre capable d'effectuer une réparation sur 90% du parc francais.
            Etre capable de conseiller et de vendre une préstation.<br>
            </p>
        </div>
        </p>
          <p class="subtitle">
          <div class="content-texte box">
            <img
                class="imgENI"
                src="../../assets/img/Various/sen.png"
                alt="Image"
                height="128"
                width="128"
            />
            <strong>2010 : Bac Pro Système Electronique et numérique (SEN)</strong><br/>
            <br>Lycée professionnel Jacques Brel - Choisy-le-Roi 94000
            <p>Etude des systèmes numériques tel que : <br>
            Les systèmes d'alarmes de sécurité, matériel audiovisuel etc.<br>
            Télécommunication et réseaux ainsi que la domotique.</p>
          </div>
          </p>
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.message-body{
  display: flex !important;
  flex-direction: column;
}

.imgENI {
  border-radius: 5%;
  float: left;
  margin-left: 3rem;
  margin-right: 10rem;
}

.content-texte {
  text-align-last: start;
}
</style>
