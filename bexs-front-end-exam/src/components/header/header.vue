

<template>
  <header class="header">
    <div class="container">
      <div class="inner-header">
        <div class="logo">
          <img alt="Vue logo" src="../../assets/img/header/logo.svg">
        </div>
        <myMenu/>
      </div>
    </div>
  </header>
</template>

<script>
import myMenu from './menu/menu.vue'

export default {
  name: 'headerC',
  props: {
    msg: String
  },
  components: {
    myMenu
  }
}
</script>


<style lang="sass">

header, .inner-header
  display: inline-block
  vertical-align: top
  width: 100%
header
  border-bottom: 0.5px solid #F7F7F7
  .inner-header
    padding: 24px 0
  .logo
    float: left
  @media (min-width: 621px )
    height: 9.04vh
    min-height: 91px
    .menu
      float: right
      width: 46.853%
  @media (max-width: 620px )
    .logo, .menu
      width: 100%
      text-align: center
    .menu
      display: inline-block
      vertical-align: top

  .menu
    padding: 12px 0
    li
      display: inline-block
      vertical-align: top
      width: 15%
      height: 18px
      border-radius: 5px
      background-color: #919191
      color: transparent
      cursor: pointer
      &:not(:first-child)
        margin-left: 5.62%

</style>

<style scoped>

</style>
