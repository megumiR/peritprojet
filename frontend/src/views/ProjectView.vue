<template>
  <div class="project">
    <h1>Projects</h1>
    <p>Please click the project for see the detail</p>
    <section class="row flex">
      <h2 class="visually-hidden">Mes projets</h2>
      <div class="card mb-3 col-4">
        <router-link to="/projectdetail/p7">
          <img
            class="card-img-top"
            src="../assets/p6.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Le projet backend (Node.js)</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div> </router-link
        ><router-view />
      </div>
      <div class="card mb-3 col-4">
        <img class="card-img-top" src="../assets/p7.png" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Le projet backend (Node.js)</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural to
            additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
