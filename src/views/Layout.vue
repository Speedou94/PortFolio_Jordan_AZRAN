<template>
  <nav>
    <navbar />
  </nav>
  <div>
    <router-view> </router-view>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import navbar from "@/components/utils/navbar.vue";
import Footer from "@/components/utils/Footer.vue";
export default {
  name: "HomeLayout",
  components: {
    navbar,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
