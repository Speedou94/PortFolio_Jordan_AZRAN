<template>
  <div>
    <title>A propos</title>
    <div class="accueil">
      <h1 class="title mt-6 has-font-ubuntu">Jordan AZRAN</h1>
      <h2 class="subtitle">Developpeur Web & Web Mobile</h2>
    </div>
  </div>
  <div class="aboutme">
    <aboutMe />
  </div>
  <div class="skill">
    <skill/>
  </div>
  <div class="cv-ja">
    <mon-cv/>
  </div>
  <div class="cv-langage">
    <Techno/>
    <IDE/>
  </div><br>
  <div class="projects">
    <ENI/>
  </div>
  <div class="contact-me">
    <contact-me/>
  </div>

</template>

<script>
import AboutMe from "/src/components/About/AboutMe";
import MonCv from "/src/components/CV/Experience";
import Skill from "@/components/CV/Skill";
import Techno from "@/components/CV/Techno";
import IDE from "@/components/CV/IDE";
import MesProjets from "@/views/Projects";
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
    AboutMe
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
