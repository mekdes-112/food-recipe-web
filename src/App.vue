<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    
  
    
    
  
  </div>

</template>

<script>
import NavBar from './components/Nav.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    
  },
  
  };

</script>

<style>
.logo {
  margin-right: -15px;
}

.logo-text {
  font-size: 40px;
  color: #6E907E;
  font-family: 'Irish Grover', sans-serif;
}.search-form {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }

  .search-input {
    padding: 2px;
    border: 0.5px solid #EEEEEE;
    background-color: #EEEEEE;
    border-radius: 8px;
    width: 300px;
    margin-right: 8px;
    margin-left: 40px;
    margin-top: 5px;
  }
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

  * {
    box-sizing: border-box;
  }

  body {
    background: #E6E8DD !important;
    min-height: 100vh;
    display: flex;
    font-weight: 400;
    font-family: 'Fira Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, label, span {
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
  }

  body, html, #app, #root, .auth-wrapper {
    width: 100%;
    height: 100%;
  }

  #app {
    text-align: center;
  }

  .navbar-light {
    background-color: #ffffff;
    box-shadow: 0px 14pc 80px rgba(34, 35, 58, 0.2);
  
  }

  .auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    
  }

  .auth-inner {
    width: 400px;
    margin: auto;
    background: #ffffff;
    
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }

  .auth-wrapper .form-control:focus {
    border-color:#6E907E;
    box-shadow: none;
  }

  .auth-wrapper h3 {
    text-align:center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }

  .custom-control-label {
    font-weight: 400;
  }

  .forgot-password a {
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color: #7f7d7d;
    margin: 0;
  }

  .forget-password a {
    color: #167bff;
  }
  
    img.logo {
      display: inline;
      vertical-align: middle;
      margin-right: 10px;
    }
  

</style>
