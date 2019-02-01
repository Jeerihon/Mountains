<template lang="pug">
  .popup(:class="showPopupS || showPopupP || showPopupW ? 'show' : ''")
    span.popup__text {{message}}
    button(type="button" @click="hide").popup__button Закрыть

</template>

<script>
  import {mapState, mapActions} from "vuex";

  export default {
    data() {
      return {
        message: ''
      }
    },
    computed: {
      ...mapState('skills', {
        showPopupS: state => state.showPopup,
        messageS: state => state.popupMessage
      }),
      ...mapState('posts', {
        showPopupP: state => state.showPopup,
        messageP: state => state.popupMessage
      }),
      ...mapState('works', {
        showPopupW: state => state.showPopup,
        messageW: state => state.popupMessage
      })
    },
    watch: {
      messageS(value) {
        this.message = value;
      },
      messageP(value) {
        this.message = value;
      },
      messageW(value) {
        this.message = value;
      },
    },
    methods: {
      ...mapActions({
        hideSkill: 'skills/hide',
        hidePost: 'posts/hide',
        hideWork: 'works/hide'
      }),
      hide() {
        this.hideSkill();
        this.hidePost();
        this.hideWork();
      }
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