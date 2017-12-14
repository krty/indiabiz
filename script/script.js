Vue.use(VeeValidate);
Vue.use(axios);
var app = new Vue({
  el: '#app',
    data() {
      return{
        foms:{
        firstName: "",
        email: "",
        password: ""
          
        }
      }
    },
    methods: {
      signUp: function(e) {
        this.$validator.validateAll().then((result) => {
          if (result) {
           axios.post(`https://demo3235314.mockable.io`, {
            body: this.foms
          }).then(response => {
            if(response.status === 201)
            {
              alert("signed up successfully");
            }
          }).catch(e => {this.errors.push(e)
          })

          }
        });
      }
    }
});


var app = new Vue({
  el: '#index',
    data:() => ({
      preferred:'',
    }),
    methods: {
     validateForm() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          return;
        }
        else{
        alert('Oh NO!');
          
        }
      });
    }
    }
});