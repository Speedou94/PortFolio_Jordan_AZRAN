<template>
  <router-view />
</template>

<style lang="scss"></style>
<script>
import AboutMe from "@/components/About/AboutMe";
import MonCv from "@/views/Cv";

export default {
  components: {MonCv, AboutMe }
}
</script>