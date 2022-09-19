<template>
  <div class="Accueil">
    <h1 class="title mt-6 has-font-ubuntu">
      Jordan AZRAN<br/>
      Developpeur Web & Web Mobile <br>
      Disponible de suite sur les secteurs de La Roche Sur Yon (85) et Montpellier (34)     </h1>
  </div>
  <div class="aboutme">
    <aboutMe/>
  </div>
  <div class="skill">
    <skill/>
  </div>
  <br/><br/>
  <div class="cv-ja">
    <mon-cv/>
    <br/>
  </div>
  <div class="cv-langage">
    <Techno/>
  </div>
  <div class="cv-ide">
    <IDE/>
  </div>
  <br/>
  <div class="MesProjets">
    <MyProject/>
  </div>
  <br><br>
  <div class="contact-me">
    <contact-me/>
  </div>
  <br><br><br>
</template>

<script>
import AboutMe from "/src/components/About/AboutMe";
import MonCv from "/src/components/CV/Experience";
import Skill from "@/components/CV/Skill";
import Techno from "@/components/CV/Techno";
import IDE from "@/components/CV/IDE";
import ContactMe from "@/views/ContactMe";
import MyProject from "@/components/Projets/MyProject";

export default {
  name: "Accueil-page",
  components: {
    ContactMe,
    IDE,
    Techno,
    Skill,
    MonCv,
    AboutMe,
    MyProject,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.title {
  background-image: url("../assets/img/Various/bann.jpg");
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  color: rgb(255, 255, 255);
  padding: 120px;
}

</style>
