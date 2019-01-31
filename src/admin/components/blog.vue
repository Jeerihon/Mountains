<template lang="pug">
  #blog
    .blog__container
      blog-form
      blog-table
</template>

<script>

  import blogForm from './blog/blogForm';
  import blogTable from './blog/blogTalble';

  export default {
    components: {
      blogForm, blogTable
    }
  }
</script>

<style lang="scss" scoped>
  .blog__title {
    font-size: 21px;
    font-weight: 500;
    margin-bottom: 40px;
  }
  .blog__container {
    display: flex;
    flex-wrap: wrap;
  }
</style>