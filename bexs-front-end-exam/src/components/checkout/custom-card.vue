<template>
  <div class="custom-card">
    <i class="card-flag"></i>
    <p class="card-number">5149 4505 6231 6542</p>
    <p class="card-name">FELIPE B A PIO NT</p>
    <p class="card-valid">06/26</p>
  </div>
</template>


<script>

export default {
  name: 'custom-card',
  components: {

  }
}
</script>

<style scoped lang="sass">
.custom-card
  display: inline-block
  vertical-align: top
  position: relative
  margin: 30px 0 0
  padding: 35px 0 0 26px
  background: url('../../assets/img/elements/card-bg-empty.svg') no-repeat center
  z-index: 999999
  width: 133.82%
  height: 223px
  border-radius: 10px
  .card-flag

</style>
