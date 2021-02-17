const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
      }
    }
  },

  computed: {
    fullname() {
      console.log('this is fullname running')
      if( this.name === '') {
        return  ' ';
      }
      else {
        return this.name + ' ' + 'Carlberg';
      } 
    }
  },
  methods: {

    setName(event, lastName) {
      console.log('this is setName running')
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      console.log('this is add running')
      this.counter = this.counter + num;
    },
    reduce(num) {
      console.log('this is reduce running')
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      console.log('this is resetInput running')
      this.name = '';
    }
  }
});

app.mount('#events');
