<template lang="pug">
  #about
    h2.about__title Страница «Обо мне»
    skills-block(
      v-for="type in types"
      :key="type.id"
      :type="type"
      :skills="skills"
    )

</template>

<script>
  import skillsBlock from './about/skillsBlock'

  const data = [
    {id: 1, title: "Html", percents: 20, category: 1},
    {id: 2, title: "pug", percents: 56, category: 0},
    {id: 3, title: "sad", percents: 20, category: 1},
    {id: 4, title: "dsf", percents: 48, category: 2},
    {id: 5, title: "sgsdfh", percents: 45, category: 2},
    {id: 6, title: "sdf", percents: 5, category: 0},
    {id: 7, title: "Htdsfgml", percents: 3, category: 1},
    {id: 8, title: "sdh", percents: 20, category: 0},
    {id: 9, title: "dsfg", percents: 20, category: 1}
  ];

  export default {
    components: {
      skillsBlock
    },
    data() {
      return {
        types: [
          {id: 0, name: 'Frontend'},
          {id: 1, name: 'Backend'},
          {id: 2, name: 'Workflow'}
        ],
        skills: data
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about__title {
    font-size: 21px;
    font-weight: 500;
    margin-bottom: 40px;
  }
</style>