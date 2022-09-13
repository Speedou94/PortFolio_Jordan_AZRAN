<template>
  <article>
    <div class="message-header">
      <p>Les langages que j'utilise</p>
    </div>
    <br><br>
    <div class="icons is-flex">
      <div class="">
        <div class="media-left">
          <p class="image is-64x64">
            <img src="../../assets/img/Techno/html.png">
          </p>
        </div>
      </div>
      <div class=" ">
        <div class="media-left">
          <p class="image is-32x32">
            <img src="../../assets/img/Techno/css.png">
          </p>
        </div>
      </div>
      <div class=" ">
        <div class="media-left">
          <p class="image is-64x64">
            <img src="../../assets/img/Techno/javascript.png">
          </p>
        </div>
      </div>
      <div class=" ">
        <div class="media-left">
          <p class="image is-64x64">
            <img src="../../assets/img/Techno/Apache.png">
          </p>
        </div>
      </div>
      <br>
      <div class=" ">
        <div class="media-left">
          <p class="image is-64x64">
            <img src="../../assets/img/Techno/java.png">
          </p>
        </div>
      </div>
      <div class=" ">
        <div class="media-left">
          <p class="image is-64x64">
            <img src="../../assets/img/Techno/Angular.png">
          </p>
        </div>
      </div>
      <div class=" ">
        <div class="media-left">
          <p class="image is-64x64">
            <img src="../../assets/img/Techno/vuejs.png">
          </p>
        </div>
      </div>
      <div class=" ">
        <div class="media-left">
          <p class="image is-64x64">
            <img src="../../assets/img/Techno/php.png">
          </p>
        </div>
      </div>
      <div class=" ">
        <div class="media-left">
          <p class="image is-64x64">
            <img src="../../assets/img/Techno/symfony.png">
          </p>
        </div>
      </div>
    </div>
    <br><br>
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

.imgTechno {
  border-radius: 5%;
  float: left;
  margin-left: 3rem;
  margin-right: 10rem;
}

.content-texte {
  text-align-last: start;
}
</style>
