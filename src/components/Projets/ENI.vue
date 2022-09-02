<template>
  <div class="card">
    <a href="https://www.gekkode.com/developpement/realiser-une-carte-en-css-card-ui-css/">
      <div class="card-image">
        <img src="https://www.gekkode.com/wp-content/uploads/2021/08/orange.jpeg" alt="Orange" />
      </div>

      <div class="card-body">

        <div class="card-date">
          <time>20 Novembre 1992</time>
        </div>

        <div class="card-title">
          <h3>Lorem Ipsum</h3>
        </div>

        <div class="card-excerpt">
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus autem consectetur voluptate
            facere at, omnis ab optio placeat officiis! Animi modi harum enim quia veniam consectetur unde autem
            inventore.</p>
        </div>

      </div>
    </a>
  </div>

  <a style="position: absolute; top:10px; left:0px; right:0px; margin:auto; display:block; text-align:center;"
     href="https://www.gekkode.com/developpement/realiser-une-carte-en-css-card-ui-css/" target="blank">Voir le tutoriel
    sur https://www.gekkode.com</a>e>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display');
@import url('https://fonts.googleapis.com/css?family=Playfair+Display|Source+Sans+Pro');

body {
  background: #eee;
  padding: 40px 0px;
}

$card-size: 400px;
$image-size: 100%;
$image-height: 250px;


.card {
  width: 400px;
  margin: 0px auto;

  background-color: white;
  box-shadow: 0px 5px 20px #555;

  a {
    color: #333;
    text-decoration: none;
  }

  &:hover {
    .card-image {
      img {
        width: $image-size+10%;
        filter: grayscale(0);
      }
    }
  }

}

.card-image {

  height: 250px;

  position: relative;
  overflow: hidden;

  img {
    width: $image-size;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    filter: grayscale(1);

    transition-property: filter width;
    transition-duration: .3s;
  }

}

.card-body {
  text-align: center;
  padding: 15px 20px;
  box-sizing: border-box;
}

.card-date {
  font-family: 'Source Sans Pro', sans-serif;
}

.card-title, .card-exceprt {
  font-family: 'Playfair Display', serif;
}

.card-date, .card-title {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

.card-date, .card-excerpt {
  color: #777;
}
</style>

<script></script>