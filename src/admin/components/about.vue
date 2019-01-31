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

  @mixin phones {
    @media (max-width: $phones) {
      @content;
    }
  }

  .about__title {
    font-size: 21Px;
    font-weight: 500;
    margin-bottom: 40px;

    @include phones {
      margin-bottom: 24px;
    }
  }

  .about-skills {
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
  }
</style>