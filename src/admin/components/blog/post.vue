<template lang="pug">
  tr(:class="post.id === editItem? 'edit' : '' ").post
    td.post__title  {{post.title}}
    td.date  {{date}}
    td.post__content
      .post__content-text(v-html='post.content')
    td.post__buttons
      .post__buttons-wrap
        button(
          type='button'
          @click="getPost(post); tooglingMode(); setEditItem(post.id); toogleIsEdit()"
          :class="post.id === editItem? 'edit' : '' "
        ).button
          img(src="../../../assets/images/admin/pencil.png")
        button(type='button' @click="removePost(post.id)").button
          img(src="../../../assets/images/admin/cancel.png")
</template>

<script>
  import {mapActions, mapState} from "vuex";

  export default {
    props: {
      post: {
        type: Object,
        default: () => {
        }
      }
    },
    data() {
      return {
        date: this.post.date,
        isEdit: false
      }
    },
    computed: {
      ...mapState('posts', {
        editMode: state => state.editMode,
        editItem: state => state.editItem,
        postDate: state => state.editItem
      })
    },
    watch: {
      date(value) {
        this.post.date = value
      }
    },
    methods: {
      ...mapActions({
        getPost: "posts/getExistedPost",
        tooglingMode: "posts/tooglingMode",
        setEditItem: "posts/setEditItem",
        removePost: "posts/remove"
      }),
      toogleIsEdit() {
        this.isEdit = true
      }
    }
  }
</script>

<style lang="scss" scoped>

  /* mixin for multiline */
  @mixin multiLineEllipsis($lineHeight: 1.2em, $lineCount: 3, $bgColor: transparent){
    overflow: hidden;
    position: relative;
    line-height: $lineHeight;
    max-height: calc(16 * 3)px;
    text-align: justify;
    margin-right: -1em;
    padding-right: 40px;

    &:before {
      content: '...';
      position: absolute;
      right: 29px;
      bottom: 0;
    }
    &:after {
      content: '';
      position: absolute;
      right: 0;
      width: 1em;
      height: 1em;
      margin-top: 0.2em;
      background: $bgColor;
    }
  }


  .post {
    height: 95px;
    font-size: 14px;

    &:nth-child(even) {
      background-color: #f9f9f9;
    }

    &.edit {
      background-color: rgba($main, .15);
    }
  }

  .post__title {
    padding-left: 30px;
  }

  .post__content {
    max-width: 166px;

    &-text {
      @include multiLineEllipsis();
    }

    &-text {
      color: inherit;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .post__photo-wrap {
    width: 125px;
    height: 72px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .post__photo-pic {
    max-width: 65.6%;
  }

  .post__buttons-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .button {
    background-color: transparent;
    outline: none;

    &:first-child {
      margin-bottom: 10px;
    }

    &.edit {
      display: none;
    }
  }



</style>