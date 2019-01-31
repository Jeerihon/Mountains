<template lang="pug">
  nav.nav
    ul.nav__list
      li(
      v-for="page in pages"
      :class=""
      ).nav__item
        router-link(
        :to="page.href"
        ).nav__link {{page.title}}

</template>

<script>
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState({
        pages: state => state.adminPages.pages
      }),
    }
  }
</script>

<style lang="scss" scoped>
  @mixin desktop {
    @media (max-width: $desktop) {
      @content;
    }
  }

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

  .nav {
    background-color: #f0efe9;
    width: 100%;
    height: 60px;
    font-weight: 500;

    @include phones {
      height: auto;
    }
  }

  .nav__list {
    display: flex;
    width: 100%;

    @include phones {
      flex-direction: column;
    }
  }

  .nav__item {
    border-right: 2px solid white;
    width: 100%;
    max-width: 180px;
    text-align: center;
    overflow: hidden;

    @include phones {
      max-width: 100%;
      border-right: none;
      border-bottom: 2px solid white;
    }
  }

  .nav__link {
    position: relative;
    display: block;
    height: 100%;
    width: 200%;
    line-height: 60px;
    text-decoration: none;
    color: rgba($text-color, .7);
    cursor: pointer;
    padding-right: 100%;
    transition: all .2s;

    @include phones {
      line-height: 46px;
      font-size: 14px;
    }

    &:after {
      content: 'Перейти';
      display: block;
      visibility: visible;
      position: absolute;
      color: rgba($text-color, 1);
      width: 50%;
      top: 0;
      right: 0;
    }

    &:hover {
      transform: translateX(-50%);
    }
  }

  .router-link-exact-active {
    background-color: white;
    color: $main;
    transition: all 0s;

    &:after {
      visibility: hidden;
      transform: translateX(50%);
    }


    &:hover {
      transform: translateX(0);
    }
  }

</style>