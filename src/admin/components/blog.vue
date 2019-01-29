<template lang="pug">
  ckeditor( :editor="editor" v-model="editorData" :config="editorConfig")
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  export default {
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
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blog__title {
    font-size: 21px;
    font-weight: 500;
    margin-bottom: 40px;
  }
</style>