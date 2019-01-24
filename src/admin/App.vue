<template lang="pug">
  #root

    admin-header

    admin-nav

    main.content
      transition(name="fade" mode="out-in")
        router-view
</template>

<script>
  import adminHeader from './components/adminHeader';
  import adminNav from './components/adminNav';

  export default {
    components: {
      adminHeader, adminNav
    }
  };
</script>

<style lang="scss">
  html {
    font-size: 16px;
    user-select: none;
  }

  body, html {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Roboto-Regular', Helvetica, sans-serif;
    font-size: 16px;
    color: $text-color;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
    display: flex;
    flex-flow: column;
  }

  .wrapper {
    overflow: hidden;
    height: 100%;
  }

  .content {
    padding: 55px 30px;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
