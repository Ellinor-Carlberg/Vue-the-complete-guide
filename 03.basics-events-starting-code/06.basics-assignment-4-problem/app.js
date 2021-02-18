
const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            showClass: false,
            userInputInline: ''
        }
    },
    computed: {
userClass() {
    if(this.userInput === 'user1') {
        return this.userInput = 'user1'
    }
    else if (this.userInput === 'user2') {
        return this.userInput = 'user2'
    }
    else {
        return false;
    }
},
userBackground() {
    return this.userInputInline;
}
    },
    methods: {
        setUserInput(event) {
            this.userInput = event.target.value;
            console.log(this.userInput)
        },
        toggleClasses(event) {
            this.showClass = !this.showClass
            console.log(this.showClass)
        },
        setUserInputInline(event) {
            this.userInputInline = event.target.value;
            console.log(this.userInputInline)
        }
    }
}).mount('#assignment')