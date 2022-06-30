<template>
  <div class="hello">
    <h1>{{ mainmsg }}</h1>
    <h2>{{ submsg }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloMsg",
  props: {
    mainmsg: String,
    submsg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
