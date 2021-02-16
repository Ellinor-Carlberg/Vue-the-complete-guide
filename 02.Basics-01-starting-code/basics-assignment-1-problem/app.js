

const app = Vue.createApp({
    data() {
        return {
            myName: 'Ellinor Carlberg',
            birthYear: 1988,
            image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80',
            
            
        }
    },
    methods: {
        myAge() {
            return 2021 - this.birthYear;
        },
        myAgeIn5Years: function() {
            return 2021 - this.birthYear + 5;
        },
        favoriteNumber() {
            return Math.trunc(Math.random() * 10);
        }
    }


}).mount('#assignment')