

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <pre>Marcos</pre>
  </div>
</template>

<script>
export default {
  name: 'checkout',
  props: {
    msg: String
  }
}
</script>


<style lang="sass">
  @import '../sass/main.sass'
  body
    background-color: $cow-color
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: $cow-color;
}
</style>
