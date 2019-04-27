import Vue from 'vue';
import axios from "axios/index";

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function () {
      if (binding.value(el)) {
        window.removeEventListener('scroll', f)
      }
    };
    window.addEventListener('scroll', f)
  }
});

const skill = {
  props: {
    skillTitle: String,
    skillPercentage: Number
  },
  methods: {
    handleScroll: function (el) {
      const circle = this.$refs["circle"];
      let wScroll = window.pageYOffset;
      let windowMargin = window.innerHeight / 2;
      let svgPos = el.getBoundingClientRect().top;
      let startAnimate = wScroll - svgPos + windowMargin;

      const dashOffset = 314;
      const requiredDashoffset = (dashOffset / 100) * (100 - this.skillPercentage);

      if (startAnimate >= (svgPos - dashOffset)) {
        circle.style.strokeDashoffset = requiredDashoffset;
      }

      if (startAnimate > 2000 || startAnimate < 100) {
        circle.style.strokeDashoffset = dashOffset
      }
    }
  },
  template: "#skill"
};

const skillsItem = {
  components: {
    skill
  },
  props: {
    type: Object,
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



