<template>
  <div class="home">
    <Nav class="sticky" />
    <Maplist class="maplist" />
    <informations class="info" />
    <Files class="files" />
    <Cooperate class="cooperate" />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Cooperate from "@/components/Cooperate.vue";
import Informations from "@/components/Informations.vue";
import Files from "@/components/Files.vue";
import Maplist from "@/components/Maplist.vue";

export default {
  components: {
    Nav,
    Cooperate,
    Informations,
    Files,
    Maplist,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables";

.home {
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: $white;
    z-index: 1;
  }
  .maplist {
    margin-top: 64px;
    max-width: 100vw;
    max-height: 80vh;
    @media (orientation: portrait) {
      max-height: unset;
    }
  }

  .info {
    max-width: 80%;
    margin: 0px auto 50px auto;
  }

  .files {
    max-width: 700px;
    margin: 50px auto 100px auto;
    padding: 0 5%;
    @media (min-width: 2500px) {
      max-width: 1400px;
    }
  }
}
</style>

<style>
input,
textarea,
button,
select,
a,
p,
i,
img {
  -webkit-tap-highlight-color: transparent;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
