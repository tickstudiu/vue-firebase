<template>
  <div class="d-flex justify-content-center align-items-center height-cover-page">
    <b-form class="col-2">
      <div class="text-center">
        <img src="https://davidwalsh.name/demo/vue-logo.png" height="128px" width="128px">
        <h4 class="mt-4">Please sign in</h4>
        <h4 class="mb-4"> or sign up</h4>
      </div>
      <b-input class="p-4 mb-3 rounded-0" id="inlineFormInputName2" v-model="email" placeholder="Email" required
               autofocus/>
      <b-input class="p-4 mb-3 rounded-0" id="inlineFormInputName2" v-model="password" placeholder="Password" type="password" required/>
      <b-button class="w-100 rounded-0" variant="dark" size="lg" v-on:click="signIn">Login</b-button>
    </b-form>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: "Login",
    data: function () {
      return {
        email: '',
        password: ''
      }
    },
    methods:{
      signIn: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            alert('login success');
            firebase.auth().onAuthStateChanged((user) => {
              if (user) {
                console.log(user);
                this.$router.replace('home')
              }
            });
          })
          .catch(() => {
            //Login was not successful, let's create a new account
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
              .then(() => {
                alert('Create a new account');
                firebase.auth().onAuthStateChanged((user) => {
                  if (user) {
                    console.log(user);
                    this.$router.replace('home')
                  }
                });
              })
              .catch((error) => {
                alert('Authentication failed: ' + error);
              });
          });
      }
    }
  }
</script>

<style scoped>
  .height-cover-page {
    height: 100vh;
  }
</style>
