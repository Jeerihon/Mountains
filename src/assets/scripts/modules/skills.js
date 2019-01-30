import Vue from 'vue';
import axios from "axios/index";

const skill = {
  props: {
    skillTitle: String,
    skillPercentage: Number
  },
  methods: {
    drawCircleDependsOnPercentage() {
      const circle = this.$refs['circle'];
      const percent = -this.skillPercentage;

      circle.style.animationDelay = `${percent}s`;
    }
  },
  mounted() {
    this.drawCircleDependsOnPercentage();
  },
  template: "#skill"
};

const skillsItem = {
  components: {
    skill
  },
  props: {
    type: Number,
    skills: Array
  },
  template: "#skills-item",
};


const skillsList = {
  components: {
    skillsItem
  },
  props: {
    skillsData: Array
  },
  data() {
    return {
      types: [
        {id: 0, name: 'Frontend'},
        {id: 1, name: 'Backend'},
        {id: 2, name: 'Workflow'}
      ]
    }
  },
  template: "#skills-list"
};

new Vue({
  el: "#skills-component",
  components: {
    skillsList
  },
  data() {
    return {
      skills: []
    }
  },
  created() {
    axios.get('https://webdev-api.loftschool.com/skills/91').then(response => {
      this.skills = response.data
    })
  },
  template: "#skills-container"
});



