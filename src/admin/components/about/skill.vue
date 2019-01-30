<template lang="pug">
  tr(v-if="editMode === false").skill
    <!--td.skill__name {{skill.title}}-->
    td.skill__name
      input( type='text' :placeholder='skill.title' v-model='newSkill.title').skill__input.skill__input--name
    <!--td.skill__percentage {{skill.percents}}-->
    td.skill__percentage
      input( type='text' :placeholder='skill.percents' v-model='newSkill.percents').skill__input.skill__input--percentage
    td.skill__percent %
    td.skill__button--container
      button(v-show="!editMode" type='button').button
        img(src="../../../assets/images/admin/pencil.png")
      button(v-show="editMode" type='button').button
        img(src="../../../assets/images/admin/checked.png")
    td.skill__button--container
      button(type='button' @click="removeSkill(skill.id)").button
        img(src="../../../assets/images/admin/cancel.png")

  .skills-input__container(v-else)
    input(type='text' placeholder="Название" v-model='newSkill.title').skill__input.skills-input__item
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
          id: 0,
          title: "",
          percents: 0,
          category: this.typeId
        }
      }
    },
    methods: {
      ...mapActions({
        addNewSkillAction: "skills/add",
        removeSkill: "skills/remove",
        editSkill: 'skills/edit'
      }),
      addNewSkill(newSkill) {
        this.addNewSkillAction(newSkill).then(response => {
          this.newSkill.title = '';
          console.log(response)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

  .skill {
    height: 33px;
  }

  .skill__name {
    padding-left:  20px;

  }

  .skill__input-wrap {
    padding-left: 20px;
  }

  .skill__input--name {
    width: 90px;
    padding-left: 20px;
    height: 33px
  }

  .skill__input--percentage {
    width: 45px;
    height: 33px;
    text-align: center;
  }

  .skill__percentage {
    width: 45px;
    background: white;
    text-align: center;
    border-radius: 5px;
  }

  .button {
    width: 20px;
    height: 20px;
    cursor: pointer;
    outline: none;
    background-color: transparent;
  }

  .skills-input__container {
    display: flex;
    padding-left: 30px;
    padding-top: 10px;
  }

  .skills-input__item {
    width: 190px;
    height: 45px;

    padding-left: 20px;
    margin-right: 10px;

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

  .skill__input {
    border: 2px solid transparent;
    border-radius: 5px;
    outline: none;
    transition: all .1s;

    &:focus {
      border: 2px solid $main;
    }
  }
</style>