
const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            userInput2: ''

        }
       
    },
    
    methods: {
        showAlert() {
            return alert("Hello! I am an alert box!!");

        },
        setInput(event) {
            this.userInput = event.target.value;
        },
        setInput2(event) {
            this.userInput2 = event.target.value;
        }
    }

}).mount('#assignment')