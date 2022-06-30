<template>
  <div class="home flex">
    <div class="row">
      <HelloWorld msg="Welcome to Your Vue.js App" class="col-6" />
      <img alt="Vue logo" src="../assets/79361.png" class="img-fluid col-6" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
