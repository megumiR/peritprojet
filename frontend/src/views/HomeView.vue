<template>
  <main class="home">
    <article id="greetings" class="row bg-light">
      <h1>Hello and Thank you for visiting!</h1>
      <p class="fs-4 text-end text-wrap">
        Je m'appele<br />
        Megumi RENAUX SHONO<br />
        une développeuse web junior<br />
        Je suis à la recherche d'un job <strong>en alternance</strong> où je
        peux apprendre <strong>JAVA</strong>
      </p>
    </article>
    <article id="project">
      <div class="row flex mt-3">
        <div class="col-6">
          <h2>Projets</h2>
          <p class="fs-4 text-wrap">
            Voici, ce sont des projets que j'ai réalisé. Veullez appuyer le
            photo pour voir le détail.
            <span class="text-danger" router>
              <router-link to="/project"
                >Voir la liste de projets par ici.</router-link
              ></span
            ><router-view />
          </p>
        </div>
        <section class="col-6">
          <h2 class="visually-hidden">Some of my projects</h2>
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <router-link to="/projectdetail/p6">
                  <img src="../assets/p6.png" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </router-link>
              </div>
              <div class="carousel-item active" data-bs-interval="7000">
                <router-link to="/projectdetail/p7">
                  <img src="../assets/p7.png" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>sec slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </router-link>
              </div>
              <div class="carousel-item">
                <router-link to="/projectdetail/p7">
                  <img
                    src="../assets/logo.png"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </div>
    </article>
    <router-view />
  </main>
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
#greetings {
  height: 35rem;
}
</style>
