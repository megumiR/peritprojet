<template>
  <div class="projectdetail">
    <h1>Detail of the project</h1>
    <div class="card mb-3">
      <img
        class="card-img-top"
        src="../assets/79361.png"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Card title detail of project</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
        <button class="btn btn-primaly">
          <router-link to="/project">Retour à la liste</router-link>
        </button>
        <router-view />
      </div>
    </div>
  </div>
</template>
