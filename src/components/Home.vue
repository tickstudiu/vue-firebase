<template>
  <div v-if="loader">
    <div class="bg-muted height-cover-page">
      <b-navbar toggleable="md" type="dark" variant="dark" class="position-fixed fixed-top">
        <div class="container">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand v-on:click="homeRoute" href="#">Vue Assignment II</b-navbar-brand>
          <b-collapse is-nav id="nav_collapse">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto align-items-md-center">
              <b-nav-item v-on:click="aboutUsRoute" href="#">About Us</b-nav-item>
              <b-nav-item href="">
                <b-img rounded="circle" width="32" height="32" alt="img" class="m-1 d-md-block d-none"
                       src="https://www.ziglar.com/wp-content/uploads/2016/09/michelle-prince-profile-img.png"/>
              </b-nav-item>
              <b-nav-item v-on:click="logOut" href="#">Logout</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>

      <b-jumbotron class="mt-7 d-lg-block d-none bg-white text-center">
        <template slot="header">
          Create with Bootstrap Vue
        </template>
        <template slot="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </template>
      </b-jumbotron>

      <div class="container">
        <b-card-group columns>
          <b-card title="Card title that wraps to a new line"
                  img-src="https://placekitten.com/g/400/450"
                  img-fluid
                  img-alt="image"
                  img-top>
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit
              longer.
            </p>
          </b-card>
          <b-card header="Quote">
            <blockquote class="blockquote mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </b-card>
          <b-card title="Title"
                  img-src="https://placekitten.com/500/350"
                  img-fluid
                  img-alt="image"
                  img-top>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to additional content.
            </p>
            <small class="text-muted">Last updated 3 mins ago</small>
          </b-card>
          <b-card bg-variant="primary"
                  text-variant="white">
            <blockquote class="card-blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <footer>
                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
              </footer>
            </blockquote>
          </b-card>
          <b-card title="Title">
            <p class="card-text">
              This card has supporting text below as a natural lead-in to additional content.
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </b-card>
          <b-card img-src="https://picsum.photos/400/400/?image=41"
                  img-fluid
                  img-alt="image"
                  overlay>
          </b-card>
          <b-card img-src="https://picsum.photos/400/200/?image=41"
                  img-fluid
                  img-alt="image"
                  img-top>
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content
              than the first.
            </p>
            <div slot="footer">
              <small class="text-muted">Footer Text</small>
            </div>
          </b-card>
        </b-card-group>
      </div>

    </div>

  </div>

  <div v-else>
    <div class="d-flex justify-content-center align-items-center height-cover-page">
      <b-img rounded="circle" width="160" height="160" alt="img" class="m-1 d-md-block d-none"
             src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"/>
      {{ loaderToggle() }}
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: "Home",
    data: function(){
      return{
        loader: false,
        email: '',
        uid: '',
      }
    },
    methods: {
      logOut: function () {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      },
      loaderToggle: function () {
        setTimeout(() => {
          this.loader = true
        }, Math.floor((Math.random() * 2000) + 500));
      },
      aboutUsRoute: function () {
        this.$router.replace('about')
      },
      homeRoute: function () {
        this.$router.replace('home')
      }
    }
  }
</script>

<style scoped>
  .height-cover-page {
    min-height: 100vh;
    height: 100%;
  }

  .mt-7{
    margin-top: 4.5rem;
  }

  .bg-muted{
    background-color: #eaeaea;
  }
</style>
