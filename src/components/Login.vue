<template>
    <div class="auth-wrapper">
      <div class="auth-inner">
    <form>
    <h3 style="color: #7C838A;">Log In</h3>

    <div class="form-group">
        <label for="" style="color: #7C838A; margin-bottom: 8px; font-family: 'Poppins', sans-serif; font-size: 15px;">Email</label>
        <input type="email" class="form-control" placeholder="Enter you'r Email here" style="background-color: rgba(176, 186, 195, 0.2); border: none; margin-bottom: 8px;width: 280px;font-family: 'Poppins', sans-serif; font-size: 14px;font-weight: lighter;"/>
    </div>

    <div class="form-group">
        <label for="" style="color: #7C838A; margin-bottom: 8px; font-family: 'Poppins', sans-serif; font-size: 15px;">Password</label>
        <input type="password" class="form-control" placeholder="Enter you'r Password" style="background-color: rgba(176, 186, 195, 0.2); border: none; margin-bottom: 8px;width: 280px;font-family: 'Poppins', sans-serif; font-size: 14px;">
    </div>

    <button class="btn btn-primary btn-block" style="background-color: #6E907E; width: 280px; border-color: #6E907E; margin-top: 12px; font-family: 'Poppins', sans-serif;">Login</button>

    <p style="color: #7C838A; margin-top: 30px; font-family: 'Poppins', sans-serif; font-size: 15px;"> Don’t have a account? <a href=""> Sign Up</a></p>
   
</form>
</div>
</div>
</template>

<script>
export default {
    name: 'LoginForm',
}
</script>
