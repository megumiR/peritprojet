<template>
  <div class="projectdetail">
    <h1>Detail of the project</h1>
    <div class="card mx-3">
      <div>
        <video
          width="320"
          height="240"
          controls
          autoplay
          poster="../assets/p6.png"
        >
          <source
            src="../assets/TheHottestReviews - Google Chrome 2022-07-05 18-43-45.mp4"
            type="video/mp4"
          />
        </video>
        <iframe
          width="560"
          height="315"
          src="../assets/TheHottestReviews - Google Chrome 2022-07-05 18-43-45.mp4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
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
