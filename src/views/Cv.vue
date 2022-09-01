<template>
  <Skill />
  <Experience />
</template>

<script>
import Skill from "../components/CV/Skill.vue";
import Experience from "../components/CV/Experience";
export default {
  name: "mon-cv",
  components: {
    Skill,
    Experience,
  },
  data() {
    return {};
  },
};
</script>
