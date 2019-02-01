<template lang="pug">
  div.form-wrap
    h2.title Страница «Мои работы»
    .form-container
      form.form
        h3.form__title {{editMode? 'Изменить работу' : 'Добавить работу'}}
        label.form__item
          input(type='text' name='name' placeholder='Название проекта' v-model="work.title"
          :class="{error: validation.hasError('work.title') && validMode}"
          ).form__input
        label.form__item
          input(type='text' name='techs' placeholder='Технологии' v-model="work.techs"
          :class="{error: validation.hasError('work.techs') && validMode}"
          ).form__input
        label.form__item
          input(type='text' name='link' placeholder='Ссылка' v-model="work.link"
          :class="{error: validation.hasError('work.link') && validMode}"
          ).form__input
    label(for="image" :class="{error: validation.hasError('work.photo') && validMode && !editMode}").form__item.form__item--imgUpload
      input(type='file' name='image' id="image" @change="renderPicAndAddToData").form__imgUpload-stoc
      img(
          v-show="!editMode"
          src="../../../assets/images/admin/work_img.png"
        ).form__imgUpload-pic
      div(v-show="editMode").preview
        img(:src="previewPic").preview__img
      span.form__imgUpload-btn {{editMode? 'Изменить картинку' : 'Загрузить картинку'}}
    button(
      type="button"
      @click="editMode? editCurWork(work) : addWork(work)"
      :class="editMode? 'edit' : ''"
    ).form__btn {{editMode? 'Сохранить изменения' : 'Добавить'}}


</template>

<script>
  import { mapActions, mapState } from "vuex";
  import SimpleVueValidator from 'simple-vue-validator';

  const Validator = SimpleVueValidator.Validator;

  export default {
    mixins: [SimpleVueValidator.mixin],
    validators: {
      'work.title'(value) {
        return Validator.value(value).required('Необходимо заполнить все поля');
      },
      'work.techs'(value) {
        return Validator.value(value).required('Необходимо заполнить все поля');
      },
      'work.link'(value) {
        return Validator.value(value).required('Необходимо заполнить все поля');
      },
      'work.photo'(value) {
        return Validator.value(value).required('Необходимо заполнить все поля');
      },
    },
    data() {
       return {
         previewPic: "",
         work: {
           id: 0,
           title: "",
           techs: "",
           link: "",
           photo: ""
         },
         validMode: false
       }
    },
    computed: {
      ...mapState('works', {
        existedWork: state => state.existedWork,
        editMode: state => state.editMode,
        editItem: state => state.editItem
      })
    },
    watch: {
      existedWork(value) {
        this.setExistedWork(value)
      }
    },
    methods: {
      ...mapActions({
        addNewWork: 'works/add',
        editWork: 'works/edit',
        tooglingMode: "works/tooglingMode",
        resetEditItem: "works/resetEditItem"
      }),
      renderPicAndAddToData(e) {
        const file = e.target.files[0];
        const renderer = new FileReader();

        renderer.readAsDataURL(file);

        renderer.onloadend = () => {
          this.previewPic = renderer.result;
        };

        this.work.photo = file;
      },
      setExistedWork(existedWork) {
        this.work.id = existedWork.id;
        this.work.title = existedWork.title;
        this.work.techs = existedWork.techs;
        this.work.link = existedWork.link;
        this.previewPic = `https://webdev-api.loftschool.com/${existedWork.photo}`
      },
      editCurWork(work) {
        this.editWork(work).then(response => {
          this.validMode = false;
          this.work.title ="";
          this.work.techs ="";
          this.work.link = "";
          this.previewPic ="";
          this.tooglingMode();
          this.resetEditItem();
          console.log(response)
        })
      },
      addWork(work) {
        this.$validate().then(success => {
          this.validMode = !this.validMode;
          if (!success) return;
          this.addNewWork(work);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

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
    margin-right: 180px;

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

    &--imgUpload {
      align-items: center;
      margin: 55px 0;

      &.error {
        .form__imgUpload-btn {
          color: $red;
        }
      }

      @include tablets {
        margin: 0 0 30px 0;
      }
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

  .form__imgUpload-stoc {
    display: none;
  }

  .form__imgUpload-pic {
    margin: 0 10px;
  }

  .form__imgUpload-btn {
    color: $main;
    cursor: pointer;
    transition: all .2s;
    position: relative;

    &:hover {
      color: $secondary;
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

  .preview {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 88px;
    background-color: white;
    border-radius: 5px;
    margin-right: 22px;
  }

  .preview__img {
    max-width: 70%;
  }
</style>