<template>
    <nav class="navbar navbar-expand navbar-light fixed-top" style="background-color: white;">
      <div class="container">
        <div class="logo">
          <span class="logo-text">FOODBAY</span>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#" class="nav-link" style="margin-left: 150px;">Home</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" style="margin-left: 40px;">Menu</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" style="margin-left: 40px;">About</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" style="margin-left: 40px;">Contact</a>
            </li>
            <li class="nav-item">
              <form class="search-form">
  <input class="search-input" type="text" placeholder="  Search..." />
  
</form>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link" style="margin-left: 100px; display: inline-block;">Log In</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" style="margin-left: 20px;">Sign Up</a>
            </li>
           

          </ul>
          
        </div>
      </div>
    </nav>

</template>

<script>
export default {
    name: 'NavBar',
}
    
</script>
