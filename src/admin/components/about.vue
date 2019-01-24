<template lang="pug">
  .about-container
    h2.title Страница «Обо мне»
    skills-block

</template>

<script>
  import skillsBlock from './skillsBlock'

  export default {
    components: {
      skillsBlock
    }
  }
// const data = [
//   {id: 1, title: "Html", percents: 20, category: 1},
//   {id: 2, title: "pug", percents: 20, category: 1},
//   {id: 3, title: "Html", percents: 20, category: 1},
//   {id: 4, title: "Html", percents: 20, category: 1},
//   {id: 5, title: "Html", percents: 20, category: 1},
//   {id: 6, title: "Html", percents: 20, category: 1},
//   {id: 7, title: "Html", percents: 20, category: 1},
//   {id: 8, title: "Html", percents: 20, category: 1},
//   {id: 9, title: "Html", percents: 20, category: 1}
// ]
</script>

<style lang="scss" scoped>

</style>