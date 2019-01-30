<template lang="pug">
  #about
    h2.about__title Страница «Обо мне»
    .about-skills
      skills-block(
        v-for="type in types"
        :key="type.id"
        :type="type"
        :skills="skills"
      )

</template>

<script>
  import skillsBlock from './about/skillsBlock';
  import { mapActions, mapState } from 'vuex';

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
        ]
      }
    },
    computed: {
      ...mapState('skills', {
        skills: state => state.skills
      })
    },
    created() {
      this.fetchSkills();
    },
    methods: {
      ...mapActions({
        fetchSkills: "skills/fetch"
      })
    }
  }
</script>

<style lang="scss" scoped>
  .about__title {
    font-size: 21px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  .about-skills {
    display: flex;
    flex-wrap: wrap;
    width: 1100px;
  }
</style>