<template>
  <div class="competences">
  <Skill />
  <Experience />
  <Techno /><br>
  <IDE />
  </div>
</template>

<style lang="scss" scoped>
.competences{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: stretch;
  justify-content: center;
}
</style>

<script>
import Skill from "../components/CV/Skill.vue";
import Experience from "../components/CV/Experience";
import Techno from "../components/CV/Techno.vue";
import IDE from "../components/CV/IDE.vue";
export default {
  name: "mon-cv",
  components: {
    Skill,
    Experience,
    Techno,
    IDE,
  },
  data() {
    return {};
  },
};
</script>
