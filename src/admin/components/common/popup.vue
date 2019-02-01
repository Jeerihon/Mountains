<template lang="pug">
  .popup(:class="showPopup ? 'show' : ''")
    span.popup__text {{message}}
    button(type="button" @click="hide").popup__button Закрыть

</template>

<script>
  import {mapState, mapActions} from "vuex";

  export default {
    computed: {
      ...mapState('skills', {
        showPopup: state => state.showPopup,
        message: state => state.popupMessage
      })
    },
    methods: {
      ...mapActions({
        hide: 'skills/hide'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 30px rgba(0,0,0,0.1);
    visibility: hidden;
    opacity: 0;
    transition: opacity .2s;

    &.show {
      visibility: visible;
      opacity: 1;
    }
  }

  .popup__text {
    margin-bottom: 20px;
  }

  .popup__button {
    background-color: $main;
    color: white;
    width: 104px;
    line-height: 40px;
    border-radius: 5px;
  }
</style>