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
              <b-nav-item v-on:click="aboutUsRoute" href="#" active>About Us</b-nav-item>
              <b-nav-item href="">
                <b-img rounded="circle" width="32" height="32" alt="img" class="m-1 d-md-block d-none"
                       src="https://www.ziglar.com/wp-content/uploads/2016/09/michelle-prince-profile-img.png"/>
              </b-nav-item>
              <b-nav-item v-on:click="logOut" href="#">Logout</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>

      <div class="container text-center">
        <div class="row">
          <div class="col height-cover-page align-items-center d-lg-flex border-0">
            <b-card title="Wanchalerm Suksawat"
                    img-src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/29511536_1762161747178929_6797966305692918382_n.jpg?_nc_cat=104&oh=2db7ea102bb9ceef0ae5aa787e73ad22&oe=5C531E08"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
              <p class="card-text text-muted">
                5835512100
              </p>
            </b-card>
          </div>

          <div class="col height-cover-page align-items-center d-lg-flex border-0">
            <b-card title="Wanchalerm Suksawat"
                    img-src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/29511536_1762161747178929_6797966305692918382_n.jpg?_nc_cat=104&oh=2db7ea102bb9ceef0ae5aa787e73ad22&oe=5C531E08"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
              <p class="card-text text-muted">
                5835512100
              </p>
            </b-card>
          </div>

          <div class="col height-cover-page align-items-center d-lg-flex border-0">
            <b-card title="Wanchalerm Suksawat"
                    img-src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/29511536_1762161747178929_6797966305692918382_n.jpg?_nc_cat=104&oh=2db7ea102bb9ceef0ae5aa787e73ad22&oe=5C531E08"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
              <p class="card-text text-muted">
                5835512100
              </p>
            </b-card>
          </div>

        </div>
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
    name: "AboutUs",
    data: function(){
      return{
        loader: false,
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
        }, Math.floor((Math.random() * 2000) + 500))
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

  .bg-muted{
    background-color: #eaeaea;
  }
</style>
