<template>
    <div class="auth-wrapper" style="margin-top: 40px;">
      <div class="auth-inner">
    <form @submit.prevent="handleSubmit">
        <h3 style="color: #7C838A;">Sign Up</h3>
    <div class="form-group">
        <label for="" style="color: #7C838A; margin-bottom: 8px; font-family: 'Poppins', sans-serif; font-size: 15px;">Full Name</label>
        <input type="text" v-model="full_name" class="form-control" placeholder="Enter you'r Full Name here" style="background-color: rgba(176, 186, 195, 0.2); border: none; margin-bottom: 8px;width: 280px;font-family: 'Poppins', sans-serif; font-size: 14px;"/>
    </div>

    <div class="form-group">
        <label for="" style="color: #7C838A; margin-bottom: 8px; font-family: 'Poppins', sans-serif; font-size: 15px;">Email</label>
        <input type="email" v-model="email" class="form-control" placeholder="Enter you'r Email here" style="background-color: rgba(176, 186, 195, 0.2); border: none; margin-bottom: 8px;width: 280px;font-family: 'Poppins', sans-serif; font-size: 14px;"/>
    </div>

    <div class="form-group">
        <label for="" style="color: #7C838A; margin-bottom: 8px; font-family: 'Poppins', sans-serif; font-size: 15px;">Password</label>
        <input type="password" v-model="password" class="form-control" placeholder="Enter you'r Password" style="background-color: rgba(176, 186, 195, 0.2); border: none; margin-bottom: 8px;width: 280px;font-family: 'Poppins', sans-serif; font-size: 14px;">
    </div>

    <div class="form-group">
        <label for="" style="color: #7C838A; margin-bottom: 8px; font-family: 'Poppins', sans-serif; font-size: 15px;">Confirm Password</label>
        <input type="password" v-model="password_confirm" class="form-control" placeholder="Confirm you'r Password" style="background-color: rgba(176, 186, 195, 0.2); border: none; margin-bottom: 8px;width: 280px;font-family: 'Poppins', sans-serif; font-size: 14px;">
    </div>

    <button class="btn btn-primary btn-block" style="background-color: #6E907E; width: 280px; border-color: #6E907E; margin-top: 12px; font-family: 'Poppins', sans-serif;">Signin</button>
    <p style="color: #7C838A; margin-top: 30px; font-family: 'Poppins', sans-serif; font-size: 15px;"> Already have a account? <a href=""> Log In</a></p>

    </form>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'RegisterForm',
    data() {
        return {
            full_name: '',
            email: '',
            password: '',
            password_confirm: ''
        }
    },
    methods: {
        handleSubmit(){
            const data = {
                full_name: this.full_name,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm
            };

            axios.post('http://localhost:8000/register', data)
                .then(
                    res => {
                        console.log(res)
                    })
                .catch(err => {
                    console.log(err)
                })  
        },

    },
};
</script>