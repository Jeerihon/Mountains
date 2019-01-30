<template lang="pug">
  div.blogform-wrap
    h2.title Страница «Блог»
    .form-container
      form.form
        <!--h3.form__title {{editMode? 'Изменить запись' : 'Добавить запись'}}-->
        h3.form__title Добавить запись
        label.form__item
          input(type='text' placeholder="Название" :config="dateConfig").form__input
        label.form__item.form__item--date
          datepicker(placeholder="Дата" :language="ru" input-class="datepicker__input form__input" format="dd.MM.yyyy").datepicker

    .editor
      ckeditor( :editor="editor" v-model="editorData" :config="editorConfig")
    button(
    type="button"
    @click="editMode? editCurWork(work) : addNewWork(work)"
    :class="editMode? 'edit' : ''"
  ).form__btn {{editMode? 'Сохранить изменения' : 'Добавить'}}
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import Datepicker from 'vuejs-datepicker';
  import { ru } from 'vuejs-datepicker/dist/locale'

  export default {
    components: {
      Datepicker
    },
    data() {
      return {
        editor: ClassicEditor,
        editorData: '',
        editorConfig: {
          toolbar: {
            items: [
              'heading',
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
        ru: ru
      }
    }
  }
</script>

<style lang="scss">
  .blogform-wrap {
    margin-right: 55px;
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
  }

  .datepicker {
    width: 100%;

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
    margin-bottom: 30px;
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