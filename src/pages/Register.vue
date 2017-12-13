<template>
    <div>
        <navbar :hidden-search="true"></navbar>
        <div id="signupbox" style="margin-top: 50px;" class="mainbox col-md-6 offset-md-3 col-sm-8 offset-sm-2">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h4 style="display: inline-block">Sign Up</h4>
                    <div style="float:right; font-size: 85%; position: relative;">
                        Already have an account?
                        <router-link to="/login">Login</router-link>
                    </div>
                </div>
                <div style="padding-top:30px" class="panel-body">
                    <form id="signupform" @submit.prevent="register">

                        <div id="signupalert" class="alert alert-danger" v-if="err">
                            <p>{{err}}</p>
                            <span></span>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-3 col-form-label">Email</label>
                            <div class="col-md-9">
                                <input type="email" class="form-control" placeholder="Email Address" required v-model="email">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="firstname" class="col-md-3 col-form-label">First Name</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" placeholder="First Name" required v-model="firstname">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="lastname" class="col-md-3 col-form-label">Last Name</label>
                            <div class="col-md-9">
                                <input type="text" class="form-control" placeholder="Last Name" required v-model="lastname">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="password" class="col-md-3 col-form-label">Password</label>
                            <div class="col-md-9">
                                <input type="password" class="form-control" placeholder="Password" required v-model="password">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="icode" class="col-md-3 col-form-label">Password Confirm</label>
                            <div class="col-md-9">
                                <input type="password" class="form-control" placeholder="Password Confirm" required v-model="password_confirm">
                            </div>
                        </div>

                        <div class="form-group row">
                            <!-- Button -->
                            <div class="offset-md-3 col-md-9">
                                <button id="btn-signup" type="submit" class="btn btn-info btn-block">
                                    <i class="icon-hand-right"></i> &nbsp Sign Up</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>        
    </div>
</template>

<script>
import config from '../config'
import {Network} from '../services/Network'
import Navbar from '../components/Generals/Navbar'
export default {
    components : {Navbar},
    data() {
        return {
            err : "",
            email : "",
            username : "",
            password : "",
            password_confirm : "",
            firstname : "",
            lastname : ""
        }
    },
    methods: {
        successRegister(data){
            let tmp = this;
            setTimeout(function() {
                tmp.$router.push({name : 'Login'});
            }, 500);
        },
        errRegister(data){
            console.log(data);
            this.err = data.message;
        },
        register() {
           this.err = "";
           if(this.password != this.password_confirm)
           {
               this.err = "Password Confirm not match";
               return ;
           } else {
               let params = {
                   username : this.username,
                   email : this.email,
                   password : this.password,
                   firstname : this.firstname,
                   lastname : this.lastname
               };
               Network.getDataFromApi(config.API_REGISTER,params,this.successRegister.bind(this),
                                        this.errRegister.bind(this));
           }
        }
    },
}
</script>

<style>

</style>
