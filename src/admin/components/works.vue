<template lang="pug">
  #works
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
  .works__container {
    display: flex;
    flex-wrap: wrap;
  }
</style>