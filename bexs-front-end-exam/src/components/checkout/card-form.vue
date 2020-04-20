<template>
  <div class="card-checkout">
    <form class="card-form" action="" method="post">


      <label class="card-number">
        <span>Número do cartão</span>
        <input
            @input="fieldEdited( $event )"
            @focus="fieldSelectedFocus( $event )" @blur="fieldSelectedBlur( $event )"
            type="number" name="" value="">
          <span class="error">Número de cartão inválido</span>
      </label>
      <label class="card-name">
        <span>Nome (igual ao cartão)</span>
        <input
            @input="fieldEdited( $event )"
            @focus="fieldSelectedFocus( $event )" @blur="fieldSelectedBlur( $event )"
            type="text" name="" value="">
            <span class="error">Insira seu nome completo</span>
      </label>
      <label class="card-valid">
        <span>Validade</span>
        <input
            @input="fieldEdited( $event )"
            @focus="fieldSelectedFocus( $event )" @blur="fieldSelectedBlur( $event )"
            type="number" name="" value="">
      </label>
      <label class="card-cvv">
        <span>CVV</span>
        <input
            @input="fieldEdited( $event )"
            @focus="fieldSelectedFocus( $event )" @blur="fieldSelectedBlur( $event )"
            type="number" name="" value="">
      </label>

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
import { eventBus } from './../../main';
export default {
  data: function() {
    return {
      checkoutFields : ['card-number', 'card-name', 'card-valid', 'card-cvv'],
      installmentsX : 12,
      toValid : {
        cardNumber: '',
        cardName: '',
        cardValid: '',
        cardCVV: '',
        cardStallments: ''
      },
      lastText: ''
    }
  },
  methods: {

    /* on events */
    fieldSelectedFocus: function( ev ){
      var elOn = ev.target;
      var labelField = elOn.parentElement;
      if( elOn.value === "" && elOn.value.length == 0  ){
        labelField.classList.add('active');
        labelField.classList.remove('error');
      }
      this.lastText = ev.target.value;
      this.fieldEdited(ev);
    },
    fieldSelectedBlur: function( ev ){
      var elOn = ev.target;
      var labelField = elOn.parentElement;
      if( elOn.value === "" && elOn.value.length == 0  ){
        labelField.classList.remove('active');
      }
      if( elOn.value.length < 15 ){
        labelField.classList.add('error');
      }
      else{
        labelField.classList.remove('error');

      }
      this.lastText = ev.target.value;
      this.fieldEdited(ev);
    },
    fieldEdited: function( eve ){
      var labelField = eve.target.parentElement;

      /* card name */
      if( labelField.classList.contains('card-number') ){
        if( this.lastText.length == 1 && ( eve.inputType == 'deleteContentBackward' || eve.inputType == 'deleteContentForward' ) ){
          eve.target.value = '';
        }
        else if( ! /^[0-9]/.test(eve.target.value) && this.lastText.length < 17 ){
          labelField.classList.remove('error');
          eve.target.value = this.lastText.substr(0, 15);
        }else{
          eve.target.value = eve.target.value.substr(0,15 );
        }

        eventBus.$emit('cardNumber', eve.target.value)
      }
      if( labelField.classList.contains('card-name') ){
        if( this.lastText.length == 1 && ( eve.inputType == 'deleteContentBackward' || eve.inputType == 'deleteContentForward' ) ){
          eve.target.value = '';
        }
        else if( eve.target.value.trim().split(' ').length > 1 ){
          labelField.classList.remove('error');
          console.log('eve.target.value.split(" ")', eve.target.value.trim().split(' ').length );
        }else if( eve.target.value.trim() === '' ){
          labelField.classList.remove('error');
        }
      }
      this.lastText = eve.target.value;

    }

  },
  computed: {
    // fieldEdited: function( ev ){
    //   return this.text = ev
    // }
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

  //efect error
  label.error
    span.error
      color: $main-color
      font-size: .8125rem
      top: 0
  label:not(.error)
    span.error
      display: none

  //efect
  label.active
    span
      font-size: .8125rem
      bottom: 20px

  @media (min-width: 930px)
    label
      margin-bottom: 62px
    .validate-form
      margin: 62px 0 0
      width: 55.9%

  @media (max-width: 929px)
    label
      margin-bottom: 44px
    .validate-form
      margin: 45px 0 0
      width: 100%

  label
    width: 100%
    height: 26px
    &.card-valid, &.card-cvv
      width: 48.18%
    &.card-cvv
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
      bottom: 0
      transition: all .3s ease-out
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
