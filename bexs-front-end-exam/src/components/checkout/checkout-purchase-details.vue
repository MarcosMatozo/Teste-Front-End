<template>
  <div class="purchcase-details">
    <div class="top">
      <h2 class="lorem "></h2>
    </div>
    <div class="middle">
      <div v-for=" col in 2 " :key="col" >
        <p class="lorem" v-for=" lorem in 3 " :key="lorem"></p>
      </div>
    </div>
    <div class="bottom">
      <div v-for=" col in 2 " :key="col" >
        <p class="lorem"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkout-purchase',
  components: {

  }
}
</script>

<style scoped lang="sass">
  .purchcase-details
    float: right
    background-color: #fff
    padding: 0 20px 20px
    min-height: 285px
    @media (min-width: 1366px)
      width: 23.93%
    @media (max-width: 1365px)
      margin: 65px 0 0
      width: 100%
    > div
      padding: 25px 0
      line-height: 0
    .top
      .lorem
        background-color: #F7F7F7
        margin: 27px 0 0
    .middle, .bottom
      > div
        display: inline-block
        vertical-align: top
        &:first-child
          width: 68.64%
        &:last-child
          width: 31%
          padding: 0 0 0 45px
    .middle
      border-top: 1px solid #707070
      border-bottom: 1px solid #707070
      .lorem
        background-color: #F7F7F7
        &:not(:last-child)
          margin: 0 0 10px
    .bottom
      .lorem
        background-color: #C9C9C9

    .lorem
      display: inline-block
      vertical-align: top
      width: 100%
      border-radius: 10px
    h2.lorem
      height: 18px
    p.lorem
      height: 12px
</style>
