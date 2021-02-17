
const app = Vue.createApp({
    data() {
        return {
            numberFromUser: 0,
            
           
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
              that.result = 0;
            }, 5000);
    }
      },

    computed: {
        result() {
            if(this.numberFromUser > 37) {
                return 'To much'
            }
            else if(this.numberFromUser < 37) {
                return 'Not there yet'
            }
            else {
                return this.numberFromUser;
            }
            
        }
    },
    methods: {
        add(addedValue) {
            this.numberFromUser = this.numberFromUser + addedValue;
            console.log(this.numberFromUser)
        }
    } 



}).mount('#assignment')