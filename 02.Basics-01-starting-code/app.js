const app = Vue.createApp({
    data: function() {
        return {
            curseGoal: 'Learn Vue.js!',
            vueLink: 'https://vuejs.org/',
            data1: 'Learn all about Vue',
            data2: 'Writing good Vue code'
        }
    },
    methods: {
    outputGoal() {
        const randomNumber = Math.random();
        if(randomNumber < 0.5) {
            return 'Become a Vue expert!'; 
        } else {
            return 'Become a Vue master!'
        }
    },
    testingThisKeyword() {
        const randomNumber2 = Math.random();
        if(randomNumber2 < 0.5) {
            return this.data1;
        } else {
            return this.data2;
        }
    }
    }
});

app.mount('#user-goal');