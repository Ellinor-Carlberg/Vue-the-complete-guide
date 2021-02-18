

const app = Vue.createApp({
    data() {
        return {
            aSelected: false,
            bSelected: false,
            cSelected: false
        }
    },
    computed: {

    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.aSelected = !this.aSelected;
            }
            else if (box === 'B') {
                this.bSelected = !this.bSelected;
            }
            else if (box === 'C') {
                this.cSelected = !this.cSelected;
            }
        }

    }
}).mount('#styling')