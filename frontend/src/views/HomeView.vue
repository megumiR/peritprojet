<template>
  <div class="home">
    <section class="row bg-light">
      <div class="col-8">
        <div>
          <h1>Hello and Thank you for visiting!</h1>
          <p class="fs-4 text-end text-wrap">
            Je m'appele<br />
            Megumi RENAUX SHONO<br />
            une développeuse web junior<br />
            Je suis à la recherche d'un job <strong>en alternance</strong> où je
            peux apprendre <strong>JAVA</strong>
          </p>
        </div>
      </div>
      <router-link to="/project">
        Projet here
        <i class="far fa-angle-double-down fa-jg"></i>
        <i class="far fa-arrow-circle-down"></i>
      </router-link>
    </section>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloMsg from "@/components/HelloMsg.vue";

export default {
  name: "HomeView",
  components: {
    //    HelloMsg,
  },
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,900;1,400&family=Ubuntu:wght@400;500;700&display=swap");
h1 {
  font-family: "Ubuntu", sans-serif;
}
</style>
