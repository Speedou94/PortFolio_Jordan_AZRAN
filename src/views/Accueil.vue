<template>
  <div class="Accueil">
    <h1 class="title mt-6 has-font-ubuntu">
      Jordan AZRAN<br/>
      Developpeur Web & Web Mobile <br>
      En recherche de stage du 17 octobre au 9 decembre 2022</h1>
  </div>
  <br>
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
  <div class="projects">
    <ENI/>
  </div><br><br>
  <div class="contact-me">
    <contact-me/>
  </div><br><br><br>
</template>

<script>
import AboutMe from "/src/components/About/AboutMe";
import MonCv from "/src/components/CV/Experience";
import Skill from "@/components/CV/Skill";
import Techno from "@/components/CV/Techno";
import IDE from "@/components/CV/IDE";
import ENI from "@/components/Projets/ENI";
import ContactMe from "@/views/ContactMe";

export default {
  name: "Accueil-page",
  components: {
    ContactMe,
    ENI,
    IDE,
    Techno,
    Skill,
    MonCv,
    AboutMe,
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
