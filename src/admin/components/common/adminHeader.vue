<template lang="pug">
  header.header
    h1.title Панель администрирования
    button.toSite(type='button' @click="goBack") Вернуться на сайт
</template>

<script>
  export default {
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="scss" scoped>

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: $main;
    padding: 30px;
    color: white;
  }

  .title {
    font-size: 28px;
    font-weight: 500;
  }

  .toSite {
    position: relative;
    margin-left: auto;
    color: rgba(white, .7);
    transition: all .2s;
    text-decoration: none;
    background-color: transparent;
    outline: none;

    &:before {
      content: '';
      position: absolute;
      width: 92%;
      height: 1px;
      background-color: #fff;
      top: 100%;
      opacity: .7;
      transition: all .2s;

    }

    &:hover {
      color: white;

      &:before {
        opacity: 0;
      }
    }
  }
</style>