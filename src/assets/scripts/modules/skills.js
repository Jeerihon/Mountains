import Vue from 'vue';

const skillsList = {
    components: {
        skillsItem
    },
    props: {
        skillsData: Array
    },
    template: "#skills-list"
};

const skillsItem = {
    components: {
        skill
    },
    props: {
        skills: Object
    },
    template: "#skills-item",
};

const skill = {
    props: {
        skillTitle: String,
        skillPercentage: Number
    },
    methods: {
        drawCircleDependsOnPercentage() {
            const circle = this.$refs['circle'];
            const percent = -1 * this.skillPercentage;

            circle.style.animationDelay = percent + "s";
        }
    },
    mounted() {
        this.drawCircleDependsOnPercentage();
    },
    template: "#skill"
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
        this.skills = require('../../../data/skills.json');
    },
    template: "#skills-container"
});

