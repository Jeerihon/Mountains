<template lang="pug">
  tr(v-if="editMode === false").skills-row
    td.skills-row__name {{skill.title}}
    td.skills-row__percentage {{skill.percents}}
    td.skills-row__percent %
    td.skills-row__button--container
      button(type='button').button
        img(src="../../../assets/images/admin/pencil.png")
    td.skills-row__button--container
      button(type='button').button
        img(src="../../../assets/images/admin/cancel.png")

  tfoot(v-else).skills-input
    tr.skills-input__container
      input(type='text' placeholder="Название" v-model='newSkill.title').skills-input__item
      button(type='button' @click="addNewSkill(newSkill)").skills-input__btn Добавить

</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: {
      skill: {
        type: Object,
        default: () => {
        }
      },
      editMode: {
        type: Boolean,
        default: false
      },
      typeId: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        newSkill: {
          title: "",
          percents: 0,
          category: this.typeId
        }
      }
    },
    methods: {
      ...mapActions({
        addNewSkill: "skills/add"
      })
    }
  }
</script>

<style lang="scss" scoped>

  .skills-row__name {
    padding-right: 20px;
    padding-left: 20px;
  }

  .skills-row__percentage {
    width: 45px;
    background: white;
    text-align: center;
    border-radius: 5px;
    padding: 8px 0;
  }

  .button {
    width: 20px;
    height: 20px;
    cursor: pointer;
    outline: none;
    background-color: transparent;
  }

  .skills-input {
    position: relative;
  }

  .skills-input__container {
    position: absolute;
    display: flex;
    padding-left: 20px;
    padding-top: 10px;
  }

  .skills-input__item {
    width: 190px;
    height: 45px;
    border: 2px solid transparent;
    border-radius: 5px;
    padding-left: 20px;
    margin-right: 10px;
    outline: none;
    transition: all .1s;

    &:focus {
      border: 2px solid $main;
    }
  }

  .skills-input__btn {
    background-color: $main;
    border-radius: 5px;
    outline: none;
    padding: 0 20px;
    color: white;
    transition: all .2s;
    &:hover {
      background-color: $secondary;
    }
  }
</style>