<template lang="pug">
  #works
    h2.works__title Страница «Мои работы»
    .works__container
      works-form
      works-table
</template>

<script>
  import worksForm from './works/worksForm';
  import worksTable from './works/worksTable';

  export default {
    components: {
      worksForm, worksTable
    }
  }
</script>

<style lang="scss" scoped>

</style>