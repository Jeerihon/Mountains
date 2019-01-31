<template lang="pug">
  header.header
    h1.header__title Панель администрирования
    a.toSite(href='/') Вернуться на сайт
</template>


<style lang="scss" scoped>

  @mixin tablets {
    @media (max-width: $tablets) {
      @content;
    }
  }

  @mixin phones {
    @media (max-width: $phones) {
      @content;
    }
  }

  .header {
    display: flex;
    align-items: center;
    height: 80px;
    min-height: 80px;
    background-color: $main;
    padding: 30px;
    color: white;

    @include phones {
      flex-direction: column-reverse;
      padding: 20px 0 16px 0;
    }
  }

  .header__title {
    font-size: 28px;
    font-weight: 500;

    @include tablets {
      font-size: 21px;
    }
  }

  .toSite {
    position: relative;
    margin-left: auto;
    color: rgba(white, .7);
    transition: all .2s;
    text-decoration: none;
    background-color: transparent;
    outline: none;

    @include phones {
      margin-left: 0;
      margin-bottom: 10px;
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
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