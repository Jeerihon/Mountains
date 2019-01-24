<template lang="pug">
  tr
    td Html
    td 100
    td %
    td
      svg.svg
        use(xlink:href='./assets/images/icons/sprite.svg#pencil')
    td
      svg.svg
        use(xlink:href='./assets/images/icons/sprite.svg#close')

</template>

<style lang="scss" scoped>

  .svg {
    height: 20px;
    width: 20px;
    background-color: yellow;
    fill: black;
    stroke: black;
  }
</style>