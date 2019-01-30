<template lang="pug">
  .table-container
    h3.table__title Последние работы
    .table__wrap
      table.table
        thead.table__header
          tr.table__row
            td.table__data.table__data--title Название
            td.table__data.table__data--date Дата
            td.table__data.table__data--content Содержание
            td.table__data.table__data--btns
        post(
        v-for="post in posts"
        :key="post.id"
        :work="post"
        )
</template>

<script>
</script>

<style lang="scss" scoped>
  .table-container {
    width: 628px;
  }

  .table__title {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .table__wrap {
    height: 450px;
    background-color: white;
    border-radius: 10px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .table {
    width: 630px;
    border-collapse: collapse;
  }

  .table__header {
    border-bottom: 1px solid $secondary;
  }

  .table__data {
    padding: 20px 0;
    font-weight: 500;

    &:first-child {
      padding-left: 30px;
    }

    &--title{
      width: 166px;
    }
    &--date{
      width: 97px;
    }
    &--content{
      width: 200px;
    }
    &--btns {
      width: 62px;
    }
  }

</style>