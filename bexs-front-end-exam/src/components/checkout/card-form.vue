<template>
  <div class="card-checkout">
    <form class="card-form" action="" method="post">

      <template v-for=" (field, indfield) in checkoutFields ">
          <label :key="indfield" :class="field"> <span>{{ placeHolderField(field) }}</span>
          <input :key="indfield+'-label'" :type="  typeFields(field) " :name="field" value="">
          </label>
      </template>
      <div class="installments">
        <span class="arrow"></span>
        <select name="">
          <option value="disabled" selected disabled='disabled'>Número de parcelas</option>
          <option v-for=" x in installmentsX " :key="x" value="">{{x}}x Sem Juros</option>
        </select>
      </div>
      <button type="button" name="button" class="validate-form continue">Continuar</button>
    </form>
  </div>

</template>


<script>


export default {
  data: function() {
    return {
      checkoutFields : ['card-number-num', 'card-name-str', 'card-valid-num', 'card-cvv-num'],
      installmentsX : 12
    }
  },
  methods: {
    typeFields: function(field) {
      if( field.search('-num') != -1 ){
        return 'number'
      }
      else if( field.search('-str') != -1 ){
        return 'text'
      }
    },
    placeHolderField: function( fieldName ){
      var placeToReturn = '';
      switch (fieldName) {
        case 'card-number-num':
          placeToReturn = 'Número do cartão'
          break;
        case 'card-name-str':
          placeToReturn = 'Nome (igual ao cartão)';
          break;
        case 'card-valid-num':
          placeToReturn = 'Validade';
          break;
        case 'card-cvv-num':
          placeToReturn = 'CVV';
          break;
      }
      return placeToReturn
    }
  }
}
</script>

<style lang="sass">
@import './../../sass/elements'
.card-form
  label, label input, label span, .installments
    display: inline-block
    vertical-align: top
  label input , .installments select
    border-bottom: 1px solid #C9C9C9
  label input, label span, .installments select
    color: #C9C9C9
    font-weight: 100
    font-size: 1.0625rem

  @media (min-width: 930px)
    label
      margin-bottom: 62px
    .validate-form
      margin: 62px 0 0

  @media (max-width: 929px)
    label
      margin-bottom: 44px
    .validate-form
      margin: 45px 0 0

  label
    width: 100%
    height: 26px
    &.card-valid-num, &.card-cvv-num
      width: 48.18%
    &.card-cvv-num
      float: right
      span
        &:after
          content: ''
          display: inline-block
          vertical-align: top
          width: 13px
          height: 13px
          background: url('../../assets/img/elements/info.svg') no-repeat center
          background-size: 13px
          margin: 3px 0 0 10px
    span
      position: relative
  input
    width: 100%
    padding: 0 0 5px
    z-index: 999
    position: relative
    margin: -18px 0 0
    border: none
    background: transparent
    padding-bottom: 5px
    height: 26px
    line-height: 26px
    -moz-appearance: textfield
    &::-webkit-outer-spin-button, &:-webkit-inner-spin-button
      opacity: 0
      -webkit-appearance: none

  .installments
    width: 100%
    position: relative
    .arrow
      position: absolute
      right: 3px
      top: 2px
      &:before
        transform: rotate(135deg)
    select
      width: 100%
      -webkit-appearance: none
      border-left: none
      border-top: none
      border-right: none
      font-family: $font-family-main
      option
        padding: 0

  .validate-form
    float: right
    width: 55.9%
    border-radius: 10px
    background-color: $main-color
    border: none
    font-size: 1.0625rem
    color: #fff
    text-transform: uppercase
    font-weight: 500
    height: 51px
    line-height: 51px
    text-align: center


</style>
