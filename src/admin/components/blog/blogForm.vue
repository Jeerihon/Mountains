<template lang="pug">
  div.form-wrap
    h2.title Страница «Блог»
    .form-container
      form.form
        h3.form__title {{editMode? 'Изменить запись' : 'Добавить запись'}}
        label.form__item
          input(
          type='text'
          placeholder="Название"
          v-model="post.title"
          :class="{error: validation.hasError('post.title')}"
          ).form__input
        label.form__item.form__item--date
          datepicker(
          placeholder="Дата"
          :language="ru"
          input-class="datepicker__input form__input"
          format="dd.MM.yyyy"
          v-model="post.date"
          :disabledDates="disabledDates"
          :class="{error: validation.hasError('post.date')}"
          ).datepicker

    .editor(:class="{error: validation.hasError('post.content')}")
      ckeditor( :editor="editor" v-model="post.content" :config="editorConfig")
    button(
    type="button"
    @click="editMode? editCurPost(post) : addPost(post)"
    :class="editMode? 'edit' : ''"
    ).form__btn {{editMode? 'Сохранить изменения' : 'Добавить'}}

</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import Datepicker from 'vuejs-datepicker';
  import {ru} from 'vuejs-datepicker/dist/locale'
  import {mapActions, mapState} from "vuex";
  import SimpleVueValidator from 'simple-vue-validator';

  const Validator = SimpleVueValidator.Validator;

  export default {
    components: {
      Datepicker
    },
    mixins: [SimpleVueValidator.mixin],
    validators: {
      'post.title'(value) {
        return Validator.value(value).required('Необходимо заполнить все поля');
      },
      'post.date'(value) {
        return Validator.value(value).required('Необходимо заполнить все поля');
      },
      'post.content'(value) {
        return Validator.value(value).required('Необходимо заполнить все поля');
      }
    },
    data() {
      return {
        post: {
          id: 0,
          title: "",
          date: "",
          content: ""
        },
        editor: ClassicEditor,
        editorData: '',
        editorConfig: {
          toolbar: {
            items: [
              'heading',
              '|',
              'bold',
              'italic',
              'link',
              'ul',
              'undo',
              'redo',
              'imageupload',
              'bulletedlist',
              'numberedlist',
              'blockquote'
            ]
          },
          language: 'ru'
        },
        disabledDates: {
          customPredictor(date) {
            const curDate = new Date();
            const day = curDate.getDate();
            const month = curDate.getMonth();
            const year = curDate.getFullYear();
            if (date.getDate() > day && date.getMonth() >= month || date.getMonth() > month  ||  date.getFullYear() > year) {
              return true;
            }
          }
        },
        ru: ru
      }
    },
    computed: {
      ...mapState('posts', {
        existedPost: state => state.existedPost,
        editMode: state => state.editMode,
        editItem: state => state.editItem
      })
    },
    watch: {
      existedPost(value) {
        this.setExistedPost(value)
      }
    },
    methods: {
      ...mapActions({
        addNewPost: 'posts/add',
        editPost: 'posts/edit',
        tooglingMode: "posts/tooglingMode",
        resetEditItem: "posts/resetEditItem"
      }),
      setExistedPost(existedPost) {
        this.post.id = existedPost.id;
        this.post.title = existedPost.title;
        this.post.date = new Date(existedPost.date*1000).toLocaleDateString();
        this.post.content = existedPost.content;
      },
      addPost(post) {
        this.addNewPost(post).then(response => {
          this.$validate().then(success => {
            if (!success) return;
            this.resetInput();
            console.log(response)
          })
        })
      },
      editCurPost(post) {
        this.editPost(post).then(response => {
          this.resetInput()
          this.tooglingMode();
          this.resetEditItem();
          console.log(response)
        })
      },
      resetInput() {
        this.post.title = "";
        this.post.date = "";
        this.post.content = "";
      }
    }
  }
</script>

<style lang="scss">

  @mixin tablets {
    @media (max-width: $tablets) {
      @content;
    }
  }

  @mixin phones {
    @media (max-width: $phones) {
      @content;
    }
  }

  .form-wrap {
    margin-right: 55px;
    width: 500px;
    margin-bottom: 45px;

    @include tablets {
      margin-right: 0;
    }

    @include phones {
      margin-bottom: 30px;
    }
  }

  .title {
    font-size: 21px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  .form-container {
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    @include phones {
      width: 100%;
    }
  }

  .form__title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .form__item {
    display: flex;
    height: 45px;
    margin-bottom: 20px;
    width: 100%;

    @include phones {
      width: 300px;
    }
  }

  .form__input {
    width: 100%;
    border: 2px solid transparent;
    border-radius: 5px;
    padding: 0 20px;
    font-size: 16px;
    outline: none;
    transition: all .1s;

    &:focus {
      border: 2px solid $main;
    }

    &.error {
      border: 2px solid $red;
    }
  }

  .datepicker {
    width: 100%;
    &.error {
      .form__input {
        border: 2px solid $red;
      }
    }
  }

  .form__item--date {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 17px;
      height: 17px;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      background: url("../../../assets/images/admin/calenda.png") center center no-repeat;
    }
  }

  .datepicker__input {
    width: 100%;
    height: 45px;
    padding-left: 20px;
    outline: none;

  }

  .datepicker__img-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 60px;
    background-color: white;
  }

  .editor {
    display: flex;
    width: 500px;
    margin-bottom: 30px;

    .ck-editor {
      width: 100%;
    }

    .ck-toolbar {
      font-size: 11px;
      height: 30px;
      border-top-color: white;
    }

    .ck-content {
      height: 155px;
      overflow-y: auto;
    }

    .ck-focused {
      border: 1px solid $main !important;
    }

    &.error {
      .ck-content {
        border: 1px solid $red !important;
      }
    }
  }

  .form__btn {
    height: 45px;
    width: 114px;
    color: white;
    border-radius: 5px;
    background-color: $main;
    outline: none;
    font-size: 16px;
    transition: all .2s;

    &:hover {
      background-color: $secondary;
    }
    &.edit {
      width: 207px;
    }
  }
</style>