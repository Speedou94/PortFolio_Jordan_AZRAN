<template>
  <navbar></navbar>
  <div class="Accueil">
    <h1 class="title mt-6 has-font-ubuntu">Jordan Azran
    </h1>
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
  <Footer></Footer>
</template>

<script>
import AboutMe from "/src/components/About/AboutMe";
import MonCv from "/src/components/CV/Experience";
import Skill from "@/components/CV/Skill";
import Techno from "@/components/CV/Techno";
import IDE from "@/components/CV/IDE";
import ContactMe from "@/views/ContactMe";
import MyProject from "@/components/Projets/MyProject";
import Footer from "@/components/utils/Footer";
import Navbar from "@/components/utils/navbar";

export default {
  name: "Accueil",
  components: {
    Navbar,
    ContactMe,
    IDE,
    Techno,
    Skill,
    MonCv,
    AboutMe,
    MyProject,
    // eslint-disable-next-line vue/no-unused-components
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  color: black;
  padding: 12px;
}

</style>
