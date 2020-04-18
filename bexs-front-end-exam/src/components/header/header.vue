

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
  height: 9.04vh
  .inner-header
    padding: 24px 0
  .logo
    float: left

  .menu
    float: right
    width: 46.853%
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
