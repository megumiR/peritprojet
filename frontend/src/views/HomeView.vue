<template>
  <div class="home">
    <section class="row flex">
      <div class="col-6 flex">
        <h1>Hello and Thank you for visiting!</h1>
        <h2>
          Je m'appele<br />
          Megumi RENAUX SHONO<br />
          une développeuse web junior<br />
          Je suis à la recherche d'un job <strong>en alternance</strong> où je peux apprendre <strong>JAVA</strong>
        </h2>
      </div>
      <img
        alt="Vue logo"
        src="../assets/unsplash.jpg"
        class="img-fluid col-6"
      />
    </section>
    <section>
      <div></div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloMsg from "@/components/HelloMsg.vue";

export default {
  name: "HomeView",
  components: {
    HelloMsg,
  },
};
</script>
